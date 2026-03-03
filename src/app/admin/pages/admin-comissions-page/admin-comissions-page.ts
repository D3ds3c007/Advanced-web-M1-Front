import { CommonModule } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';

import { AdminCommissionsBackService, Commission, FeeMutationResult } from '../../services/admin-comissions-back';
import { ComissionsTableComponent } from '../../components/comissions/comissions-table/comissions-table';
import { ComissionDialogComponent } from '../../components/comissions/comission-dialog/comission-dialog';

// reuse existing card
import { DashboardCardComponent } from '../../../back-office/components/dashboard/dashboard-card/dashboard-card';

@Component({
  selector: 'app-admin-commissions-page',
  standalone: true,
  imports: [
    CommonModule,
    DashboardCardComponent,
    ComissionsTableComponent,
    ComissionDialogComponent
  ],
  templateUrl: './admin-comissions-page.html',
  styleUrl: './admin-comissions-page.css',
})
export class AdminCommissionsPage implements OnInit {
  private service = inject(AdminCommissionsBackService);
  vm$ = this.service.vm$;

  dialogOpen = false;

  openCreate() { this.dialogOpen = true; }
  closeDialog() { this.dialogOpen = false; }

  activeCommission = (commissions: Commission[]): Commission | null =>
    commissions.find((commission) => commission.active) ?? null;

  inactiveCount = (commissions: Commission[]): number =>
    commissions.filter((commission) => !commission.active).length;

  highestRate = (commissions: Commission[]): number =>
    commissions.reduce((max, commission) => Math.max(max, commission.rule.percentAbove), 0);

  highestThreshold = (commissions: Commission[]): number =>
    commissions.reduce((max, commission) => Math.max(max, commission.rule.thresholdEur), 0);

  ngOnInit(): void {
    this.service.loadFees().subscribe({
      error: (err: Error) => this.alertMessage(err.message),
    });
  }

  activate(id: string) {
    this.service.setActive(id).subscribe({
      next: (res: FeeMutationResult) => this.alertMessage(res.message),
      error: (err: Error) => this.alertMessage(err.message),
    });
  }

  deactivateAll() {
    this.service.deactivateAll().subscribe({
      next: (res: FeeMutationResult) => this.alertMessage(res.message),
      error: (err: Error) => this.alertMessage(err.message),
    });
  }

  onSave(e: {
    name: string;
    thresholdEur: number;
    fixedUnderUsd: number;
    percentAbove: number;
    activateNow: boolean;
  }) {
    this.service.create({
      name: e.name,
      rule: {
        thresholdEur: e.thresholdEur,
        fixedUnderUsd: e.fixedUnderUsd,
        percentAbove: e.percentAbove,
      },
      activateNow: e.activateNow,
    }).subscribe({
      next: (res: FeeMutationResult) => {
        this.closeDialog();
        this.alertMessage(res.message);
      },
      error: (err: Error) => this.alertMessage(err.message),
    });
  }

  private alertMessage(message?: string) {
    if (!message || typeof window === 'undefined') return;
    window.alert(message);
  }
}
