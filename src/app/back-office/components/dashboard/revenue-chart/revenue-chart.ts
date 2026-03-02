import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevenuePoint } from '../../../services/dashboard-service';

@Component({
  selector: 'app-revenue-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './revenue-chart.html',
  styleUrls: ['./revenue-chart.css'],
})
export class RevenueChartComponent {
  private static nextChartId = 0;

  @Input() points: RevenuePoint[] = [];
  private readonly monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  hoveredIndex: number | null = null;
  readonly chartId = `revenue-chart-${++RevenueChartComponent.nextChartId}`;

  w = 700;
  h = 280;
  padX = 24;
  padTop = 30;
  padBottom = 28;

  get plotWidth(): number {
    return this.w - this.padX * 2;
  }

  get plotHeight(): number {
    return this.h - this.padTop - this.padBottom;
  }

  get maxY(): number {
    const rawMax = Math.max(...this.points.map((p) => p.valueK), 1);
    return this.roundUpMax(rawMax);
  }

  get totalK(): number {
    return this.points.reduce((sum, point) => sum + point.valueK, 0);
  }

  get averageK(): number {
    if (!this.points.length) return 0;
    return this.totalK / this.points.length;
  }

  get peakIndex(): number {
    if (!this.points.length) return 0;
    let bestIndex = 0;
    this.points.forEach((point, index) => {
      if (point.valueK >= this.points[bestIndex].valueK) bestIndex = index;
    });
    return bestIndex;
  }

  get peakPoint(): RevenuePoint | null {
    return this.points[this.peakIndex] ?? null;
  }

  get activeIndex(): number {
    if (!this.points.length) return 0;
    return this.hoveredIndex ?? this.points.length - 1;
  }

  get activePoint(): RevenuePoint | null {
    return this.points[this.activeIndex] ?? null;
  }

  get trendDelta(): number {
    if (this.points.length < 2) return 0;
    const previous = this.points[this.points.length - 2]?.valueK ?? 0;
    const current = this.points[this.points.length - 1]?.valueK ?? 0;
    return current - previous;
  }

  get trendPercent(): number | null {
    if (this.points.length < 2) return null;
    const previous = this.points[this.points.length - 2]?.valueK ?? 0;
    if (previous <= 0) return null;
    return (this.trendDelta / previous) * 100;
  }

  get trendTone(): 'up' | 'down' | 'flat' {
    if (this.trendDelta > 0.001) return 'up';
    if (this.trendDelta < -0.001) return 'down';
    return 'flat';
  }

  get trendLabel(): string {
    if (this.points.length < 2) return 'Single period snapshot';
    if (this.trendPercent === null) {
      return `${this.trendDelta >= 0 ? '+' : ''}${this.formatCompact(this.trendDelta)} vs previous period`;
    }

    const percent = Math.abs(this.trendPercent);
    const prefix = this.trendPercent >= 0 ? '+' : '-';
    return `${prefix}${percent.toFixed(percent >= 10 ? 0 : 1)}% vs previous period`;
  }

  get yTicks(): number[] {
    const steps = 4;
    return Array.from({ length: steps + 1 }, (_, index) => this.maxY - (this.maxY / steps) * index);
  }

  get linePath(): string {
    if (!this.points.length) return '';
    if (this.points.length === 1) {
      return `M ${this.x(0)} ${this.y(this.points[0].valueK)}`;
    }

    const coords = this.points.map((point, index) => ({ x: this.x(index), y: this.y(point.valueK) }));
    let path = `M ${coords[0].x} ${coords[0].y}`;

    for (let index = 1; index < coords.length; index++) {
      const prev = coords[index - 1];
      const curr = coords[index];
      const controlX = (prev.x + curr.x) / 2;
      path += ` C ${controlX} ${prev.y}, ${controlX} ${curr.y}, ${curr.x} ${curr.y}`;
    }

    return path;
  }

  get areaPath(): string {
    if (!this.points.length) return '';
    const startX = this.x(0);
    const endX = this.x(this.points.length - 1);
    const baseY = this.baselineY;

    return `${this.linePath} L ${endX} ${baseY} L ${startX} ${baseY} Z`;
  }

  get baselineY(): number {
    return this.h - this.padBottom;
  }

  get gridLineCount(): number {
    return this.yTicks.length;
  }

  get barWidth(): number {
    if (!this.points.length) return 0;
    const slot = this.plotWidth / this.points.length;
    return Math.max(8, Math.min(26, slot * 0.54));
  }

  get labelStep(): number {
    const count = this.points.length;
    if (count <= 12) return 1;
    if (count <= 18) return 2;
    if (count <= 24) return 3;
    return 4;
  }

  x(i: number): number {
    const n = Math.max(this.points.length - 1, 1);
    return this.padX + (i * this.plotWidth) / n;
  }

  y(v: number): number {
    return this.baselineY - (v / this.maxY) * this.plotHeight;
  }

  labelFor(point: RevenuePoint): string | number {
    if (this.points.length === 12 && point.year >= 1 && point.year <= 12) {
      return this.monthLabels[point.year - 1];
    }
    return point.year;
  }

  shouldRenderLabel(index: number): boolean {
    return index % this.labelStep === 0 || index === this.points.length - 1;
  }

  barX(index: number): number {
    return this.x(index) - this.barWidth / 2;
  }

  barHeight(value: number): number {
    return Math.max(8, this.baselineY - this.y(value));
  }

  barY(value: number): number {
    return this.baselineY - this.barHeight(value);
  }

  showTooltip(index: number): void {
    this.hoveredIndex = index;
  }

  hideTooltip(): void {
    this.hoveredIndex = null;
  }

  axisLabel(value: number): string {
    return this.formatCompact(value);
  }

  periodLabel(point: RevenuePoint | null): string {
    if (!point) return '-';
    return String(this.labelFor(point));
  }

  pointValueLabel(point: RevenuePoint | null): string {
    if (!point) return '0K';
    return this.formatCompact(point.valueK);
  }

  trackByIndex(index: number): number {
    return index;
  }

  private roundUpMax(value: number): number {
    if (value <= 1) return 1;
    const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
    const normalized = value / magnitude;

    if (normalized <= 1) return magnitude;
    if (normalized <= 2) return 2 * magnitude;
    if (normalized <= 5) return 5 * magnitude;
    return 10 * magnitude;
  }

  private formatCompact(value: number): string {
    const abs = Math.abs(value);
    if (abs >= 100) return `${Math.round(value)}K`;
    if (abs >= 10) return `${value.toFixed(1).replace(/\.0$/, '')}K`;
    return `${value.toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1')}K`;
  }
}
