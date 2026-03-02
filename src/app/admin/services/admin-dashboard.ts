<<<<<<< HEAD
import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { forkJoin, map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

export type GraphFilter = 'ANNUAL' | 'MONTHLY';
=======
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

export interface KpiCardVM {
  title: string;
  percent: number;
  trend?: 'up' | 'down';
  subtitle: string;
  linkText: string;
}

<<<<<<< HEAD
export interface RevenuePoint {
  year: number;
  valueK: number;
}

export interface TopItem {
  name: string;
  valueK: number;
}

export interface TopYearVM {
  year: number;
  soldK: number;
  totalCommissions: number;
  ordersCount: number;
}

export interface TopMonthVM {
  month: string;
  year: number;
  monthNumber: number;
  totalCommissions: number;
  ordersCount: number;
}

export interface TopShopVM {
  shopId: string;
  shopName: string;
  totalCommissions: number;
  ordersCount: number;
  valueK: number;
}

export interface GraphPoint {
  key: number;
  label: string;
  value: number;
  ordersCount: number;
}

export interface GraphVM {
  filter: GraphFilter;
  year: number;
  month?: number;
  points: GraphPoint[];
  chartPoints: RevenuePoint[];
}

export interface AdminDashboardVM {
  totalShops: number;
  activeShops: number;
  pendingShops: number;
  rejectedShops: number;
  bannedShops: number;
  kpiTotalShops: KpiCardVM;
  kpiPendingShops: KpiCardVM;
  kpiBannedShops: KpiCardVM;
  topMagasins: TopItem[];
  topShops: TopShopVM[];
  topMonth: TopMonthVM | null;
  topYear: TopYearVM | null;
}

interface ShopsKpisResponse {
  totalShops: number;
  totalActiveShops: number;
  totalPendingShops: number;
  totalRejectedShops: number;
  totalSuspendedShops: number;
}

interface DashboardSummaryResponse {
  topYear: {
    year: number;
    totalCommissions: number;
    ordersCount: number;
  } | null;
  topMonth: {
    year: number;
    month: number;
    monthName?: string;
    totalCommissions: number;
    ordersCount: number;
  } | null;
  topShops: Array<{
    shopId: string;
    shopName?: string;
    totalCommissions: number;
    ordersCount: number;
  }>;
}

interface AnnualGraphResponse {
  filter: 'ANNUAL';
  year: number;
  points: Array<{
    month: number;
    totalCommissions: number;
    ordersCount: number;
  }>;
}

interface MonthlyGraphResponse {
  filter: 'MONTHLY';
  year: number;
  month: number;
  points: Array<{
    day: number;
    totalCommissions: number;
    ordersCount: number;
  }>;
=======
export interface RevenuePoint { year: number; valueK: number; }
export interface TopItem { name: string; valueK: number; }

export interface TopBuyer {
  name: string;
  company: string;
  avatarUrl: string;
}

export interface CustomerRow {
  id: string;
  fullName: string;
  company: string;
  avatarUrl: string;
  createdAt: string;
}

export interface AdminDashboardVM {
  kpiTotalShops: KpiCardVM;
  kpiPendingShops: KpiCardVM;
  kpiBannedShops: KpiCardVM;

  commissions: RevenuePoint[];
  topMagasins: TopItem[];

  topMonth: { month: string; year: number };
  topYear: { year: number; soldK: number };
  topBuyer: TopBuyer;

  quarterGoal1: number;
  quarterGoal2: number;

  topCustomers: CustomerRow[];
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
}

@Injectable({ providedIn: 'root' })
export class AdminDashboardService {
<<<<<<< HEAD
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  private readonly monthLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  loadDashboard(limit = 3): Observable<AdminDashboardVM> {
    const params = new HttpParams().set('limit', String(limit));

    return forkJoin({
      summary: this.http.get<DashboardSummaryResponse>(`${this.apiUrl}fees/dashboard`, {
        params,
        withCredentials: true,
      }),
      shopKpis: this.http.get<ShopsKpisResponse>(`${this.apiUrl}shops/KPIs`, {
        withCredentials: true,
      }),
    }).pipe(
      map(({ summary, shopKpis }) => {
        const topShops = (summary.topShops ?? []).slice(0, limit).map((shop) => this.mapTopShop(shop));

        return {
          totalShops: Number(shopKpis.totalShops ?? 0),
          activeShops: Number(shopKpis.totalActiveShops ?? 0),
          pendingShops: Number(shopKpis.totalPendingShops ?? 0),
          rejectedShops: Number(shopKpis.totalRejectedShops ?? 0),
          bannedShops: Number(shopKpis.totalSuspendedShops ?? 0),
          kpiTotalShops: {
            title: 'Total shops',
            percent: Number(shopKpis.totalShops ?? 0),
            trend: Number(shopKpis.totalActiveShops ?? 0) > 0 ? 'up' : undefined,
            subtitle: `${Number(shopKpis.totalActiveShops ?? 0)} active / ${Number(shopKpis.totalShops ?? 0)} total`,
            linkText: 'Shop distribution',
          },
          kpiPendingShops: {
            title: 'Pending shops',
            percent: Number(shopKpis.totalPendingShops ?? 0),
            subtitle: `${Number(shopKpis.totalRejectedShops ?? 0)} rejected`,
            linkText: 'Pending requests',
          },
          kpiBannedShops: {
            title: 'Banned shops',
            percent: Number(shopKpis.totalSuspendedShops ?? 0),
            subtitle: `${Number(shopKpis.totalActiveShops ?? 0)} active shops`,
            linkText: 'Suspended shops',
          },
          topMagasins: topShops.map<TopItem>((shop) => ({
            name: shop.shopName,
            valueK: shop.valueK,
          })),
          topShops,
          topMonth: this.mapTopMonth(summary.topMonth),
          topYear: this.mapTopYear(summary.topYear),
        };
      })
    );
  }

  loadFeesGraphAnnual(year: number): Observable<GraphVM> {
    const params = new HttpParams()
      .set('filter', 'ANNUAL')
      .set('year', String(year));

    return this.http
      .get<AnnualGraphResponse>(`${this.apiUrl}fees/dashboard/fees-graph`, {
        params,
        withCredentials: true,
      })
      .pipe(
        map((response) => ({
          filter: 'ANNUAL',
          year: Number(response.year ?? year),
          points: (response.points ?? []).map((point) => ({
            key: Number(point.month ?? 0),
            label: this.monthLabels[Math.max(Number(point.month ?? 1) - 1, 0)] ?? String(point.month ?? ''),
            value: Number(point.totalCommissions ?? 0),
            ordersCount: Number(point.ordersCount ?? 0),
          })),
          chartPoints: (response.points ?? []).map((point) => ({
            year: Number(point.month ?? 0),
            valueK: this.toK(Number(point.totalCommissions ?? 0)),
          })),
        }))
      );
  }

  loadFeesGraphMonthly(year: number, month: number): Observable<GraphVM> {
    const params = new HttpParams()
      .set('filter', 'MONTHLY')
      .set('year', String(year))
      .set('month', String(month));

    return this.http
      .get<MonthlyGraphResponse>(`${this.apiUrl}fees/dashboard/fees-graph`, {
        params,
        withCredentials: true,
      })
      .pipe(
        map((response) => ({
          filter: 'MONTHLY',
          year: Number(response.year ?? year),
          month: Number(response.month ?? month),
          points: (response.points ?? []).map((point) => ({
            key: Number(point.day ?? 0),
            label: String(point.day ?? ''),
            value: Number(point.totalCommissions ?? 0),
            ordersCount: Number(point.ordersCount ?? 0),
          })),
          chartPoints: (response.points ?? []).map((point) => ({
            year: Number(point.day ?? 0),
            valueK: this.toK(Number(point.totalCommissions ?? 0)),
          })),
        }))
      );
  }

  private mapTopShop(raw: DashboardSummaryResponse['topShops'][number]): TopShopVM {
    const shopName = (raw.shopName ?? '').trim() || 'Unknown shop';

    return {
      shopId: String(raw.shopId ?? ''),
      shopName,
      totalCommissions: Number(raw.totalCommissions ?? 0),
      ordersCount: Number(raw.ordersCount ?? 0),
      valueK: this.toK(Number(raw.totalCommissions ?? 0)),
    };
  }

  private mapTopYear(raw: DashboardSummaryResponse['topYear']): TopYearVM | null {
    if (!raw) return null;

    const totalCommissions = Number(raw.totalCommissions ?? 0);

    return {
      year: Number(raw.year ?? 0),
      soldK: this.toK(totalCommissions),
      totalCommissions,
      ordersCount: Number(raw.ordersCount ?? 0),
    };
  }

  private mapTopMonth(raw: DashboardSummaryResponse['topMonth']): TopMonthVM | null {
    if (!raw) return null;

    const monthNumber = Number(raw.month ?? 0);
    const fallbackLabel = this.monthLabels[Math.max(monthNumber - 1, 0)] ?? 'No month';
    const monthName = (raw.monthName ?? '').trim() || fallbackLabel;

    return {
      month: monthName,
      year: Number(raw.year ?? 0),
      monthNumber,
      totalCommissions: Number(raw.totalCommissions ?? 0),
      ordersCount: Number(raw.ordersCount ?? 0),
    };
  }

  private toK(value: number): number {
    const asK = value / 1000;
    return Math.max(Math.round(asK * 10) / 10, value > 0 ? 0.1 : 0);
  }
}
=======
  getDashboard(): Observable<AdminDashboardVM> {
    const vm: AdminDashboardVM = {
      kpiTotalShops: {
        title: 'Nombre total boutiques',
        percent: 15,
        trend: 'up',
        subtitle: 'Increase compared to last week',
        linkText: 'Revenues report →',
      },
      kpiPendingShops: {
        title: 'Boutiques en attente',
        percent: 4,
        subtitle: 'You closed 96 out of 100 deals',
        linkText: 'All deals →',
      },
      kpiBannedShops: {
        title: 'Boutiques bannis',
        percent: 4,
        subtitle: 'You closed 96 out of 100 deals',
        linkText: 'All deals →',
      },

      commissions: [
        { year: 2016, valueK: 8 },
        { year: 2017, valueK: 12 },
        { year: 2018, valueK: 45 },
        { year: 2019, valueK: 55 },
        { year: 2020, valueK: 10 },
        { year: 2021, valueK: 18 },
        { year: 2022, valueK: 60 },
        { year: 2023, valueK: 80 },
      ],

      topMagasins: [
        { name: 'MASSIN', valueK: 120 },
        { name: 'SHEIN', valueK: 80 },
        { name: 'ICE CREAM', valueK: 70 },
        { name: 'TECHNOLOGIA', valueK: 50 },
      ],

      topMonth: { month: 'November', year: 2019 },
      topYear: { year: 2023, soldK: 96 },
      topBuyer: {
        name: 'Maggie Johnson',
        company: 'Oasis Organic Inc.',
        avatarUrl: 'https://i.pravatar.cc/80?img=12',
      },

      quarterGoal1: 84,
      quarterGoal2: 84,

      topCustomers: [
        { id: 'c1', fullName: 'Chris Friedly', company: 'Supermarket Villanova', avatarUrl: 'https://i.pravatar.cc/80?img=11', createdAt: new Date().toISOString() },
        { id: 'c2', fullName: 'Maggie Johnson', company: 'Oasis Organic Inc.', avatarUrl: 'https://i.pravatar.cc/80?img=12', createdAt: new Date().toISOString() },
        { id: 'c3', fullName: 'Gael Harry', company: 'New York Finest Fruits', avatarUrl: 'https://i.pravatar.cc/80?img=13', createdAt: new Date().toISOString() },
        { id: 'c4', fullName: 'Jenna Sullivan', company: 'Walmart', avatarUrl: 'https://i.pravatar.cc/80?img=14', createdAt: new Date().toISOString() },
      ],
    };

    return of(vm).pipe(delay(200));
  }
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
