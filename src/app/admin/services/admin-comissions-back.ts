<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable, catchError, map, of, tap, throwError } from 'rxjs';

import { environment } from '../../../environments/environment';

export interface CommissionRule {
  thresholdEur: number;
  fixedUnderUsd: number;
  percentAbove: number;
}

export interface Commission {
  _id: string;
=======
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface CommissionRule {
  thresholdEur: number;      // ex: 500
  fixedUnderUsd: number;     // ex: 1  (si total < threshold)
  percentAbove: number;      // ex: 3  (si total >= threshold)
}

export interface Commission {
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  id: string;
  name: string;
  rule: CommissionRule;
  active: boolean;
<<<<<<< HEAD
  createdAt: string;
=======
  createdAt: string; // ISO
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
}

export interface AdminCommissionsVM {
  commissions: Commission[];
  activeId: string | null;
}

<<<<<<< HEAD
export type FeeStatus = 'ACTIVE' | 'INACTIVE';

export interface FeeFromServer {
  _id: string;
  name: string;
  rate: number;
  threshold: number;
  fixed: number;
  status: FeeStatus;
  createdAt: string;
  updatedAt?: string;
}

interface FeesListResponse {
  fees?: FeeFromServer[];
  pagination?: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  message?: string;
}

interface FeeMutationResponse {
  message?: string;
  fee?: FeeFromServer;
  error?: string;
  details?: string;
}

export interface CreateFeePayload {
  name: string;
  rate: number;
  threshold: number;
  fixed: number;
  status: FeeStatus;
}

export interface FeeMutationResult {
  message?: string;
  fee?: Commission;
}

@Injectable({ providedIn: 'root' })
export class AdminCommissionsBackService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  private readonly commissionsSubject = new BehaviorSubject<Commission[]>([]);

  readonly commissions$ = this.commissionsSubject.asObservable();
  readonly vm$: Observable<AdminCommissionsVM> = this.commissions$.pipe(
    map((commissions) => ({
      commissions,
      activeId: commissions.find((commission) => commission.active)?._id ?? null,
    }))
  );
=======
@Injectable({ providedIn: 'root' })
export class AdminCommissionsBackService {
  private readonly commissionsSubject = new BehaviorSubject<Commission[]>(this.seed());

  /** vm simple (pas besoin de query pour le moment) */
  readonly vm$: Observable<AdminCommissionsVM> = new Observable(sub => {
    const s = this.commissionsSubject.subscribe(list => {
      const active = list.find(x => x.active)?.id ?? null;
      sub.next({ commissions: list, activeId: active });
    });
    return () => s.unsubscribe();
  });
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

  get snapshot(): Commission[] {
    return this.commissionsSubject.value;
  }

<<<<<<< HEAD
  loadFees(): Observable<FeeFromServer[]> {
    return this.http
      .get<FeesListResponse>(`${this.apiUrl}fees`, {
        params: { limit: 100 },
        withCredentials: true,
      })
      .pipe(
        map((response) => response.fees ?? []),
        tap((fees) => {
          this.commissionsSubject.next(fees.map((fee) => this.mapFee(fee)));
        }),
        catchError((err) => throwError(() => new Error(this.readErrorMessage(err))))
      );
  }

  createFee(payload: CreateFeePayload): Observable<FeeMutationResult> {
    return this.http
      .post<FeeMutationResponse>(`${this.apiUrl}fees`, payload, { withCredentials: true })
      .pipe(
        map((response) => this.mapMutationResponse(response)),
        tap((result) => {
          if (result.fee) {
            this.prependFee(result.fee);
          }
        }),
        catchError((err) => throwError(() => new Error(this.readErrorMessage(err))))
      );
  }

  updateFeeStatus(feeId: string, nextStatus: FeeStatus): Observable<FeeMutationResult> {
    const previous = this.commissionsSubject.value;
    this.patchLocalFeeStatus(feeId, nextStatus);

    return this.http
      .patch<FeeMutationResponse>(`${this.apiUrl}fees/${feeId}`, { status: nextStatus }, { withCredentials: true })
      .pipe(
        map((response) => this.mapMutationResponse(response)),
        tap((result) => {
          if (result.fee) {
            this.replaceFee(result.fee);
          }
        }),
        catchError((err) => {
          this.commissionsSubject.next(previous);
          return throwError(() => new Error(this.readErrorMessage(err)));
        })
      );
  }

  create(input: { name: string; rule: CommissionRule; activateNow?: boolean }): Observable<FeeMutationResult> {
    return this.createFee({
      name: input.name,
      rate: input.rule.percentAbove,
      threshold: input.rule.thresholdEur,
      fixed: input.rule.fixedUnderUsd,
      status: input.activateNow ? 'ACTIVE' : 'INACTIVE',
    });
  }

  setActive(id: string): Observable<FeeMutationResult> {
    return this.updateFeeStatus(id, 'ACTIVE');
  }

  deactivateAll(): Observable<FeeMutationResult> {
    const active = this.commissionsSubject.value.find((commission) => commission.active);
    if (!active) {
      return of({ message: 'No active commission to deactivate.' });
    }

    return this.updateFeeStatus(active._id, 'INACTIVE');
  }

  computeCommission(orderTotalEur: number): number {
    const active = this.commissionsSubject.value.find((commission) => commission.active);
=======
  /** Create (pas de delete) */
  create(input: { name: string; rule: CommissionRule; activateNow?: boolean }) {
    const id =
      typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : 'com-' + Date.now();

    const newItem: Commission = {
      id,
      name: input.name,
      rule: input.rule,
      active: false,
      createdAt: new Date().toISOString(),
    };

    let next: Commission[] = [newItem, ...this.commissionsSubject.value];

    // si activateNow => active unique
    if (input.activateNow) {
      next = next.map(c => ({ ...c, active: c.id === id }));
    }

    this.commissionsSubject.next(next);
  }

  /** Active UNIQUE : activer une => désactive toutes les autres */
  setActive(id: string) {
    const next: Commission[] = this.commissionsSubject.value.map(c => ({
      ...c,
      active: c.id === id,
    }));
    this.commissionsSubject.next(next);
  }

  /** Désactiver tout (optionnel, si tu veux permettre "aucune active") */
  deactivateAll() {
    const next: Commission[] = this.commissionsSubject.value.map(c => ({ ...c, active: false }));
    this.commissionsSubject.next(next);
  }

  /** Calcul de commission selon la commission active */
  computeCommission(orderTotalEur: number): number {
    const active = this.commissionsSubject.value.find(c => c.active);
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    if (!active) return 0;

    const { thresholdEur, fixedUnderUsd, percentAbove } = active.rule;
    if (orderTotalEur < thresholdEur) return fixedUnderUsd;

<<<<<<< HEAD
    return +(orderTotalEur * (percentAbove / 100)).toFixed(2);
  }

  private mapFee(row: FeeFromServer): Commission {
    const id = String(row._id ?? '');
    return {
      _id: id,
      id,
      name: String(row.name ?? ''),
      rule: {
        thresholdEur: Number(row.threshold ?? 0),
        fixedUnderUsd: Number(row.fixed ?? 0),
        percentAbove: Number(row.rate ?? 0),
      },
      active: row.status === 'ACTIVE',
      createdAt: String(row.createdAt ?? ''),
    };
  }

  private mapMutationResponse(response: FeeMutationResponse): FeeMutationResult {
    return {
      message: this.readMessage(response),
      fee: response.fee ? this.mapFee(response.fee) : undefined,
    };
  }

  private prependFee(fee: Commission) {
    const next = this.mergeWithActiveState(
      [fee, ...this.commissionsSubject.value.filter((item) => item._id !== fee._id)]
    );
    this.commissionsSubject.next(next);
  }

  private replaceFee(fee: Commission) {
    let found = false;
    const next = this.commissionsSubject.value.map((item) => {
      if (item._id !== fee._id) return item;
      found = true;
      return fee;
    });

    this.commissionsSubject.next(this.mergeWithActiveState(found ? next : [fee, ...next]));
  }

  private mergeWithActiveState(commissions: Commission[]): Commission[] {
    const activeId = commissions.find((commission) => commission.active)?._id;
    if (!activeId) {
      return commissions;
    }

    return commissions.map((commission) => ({
      ...commission,
      active: commission._id === activeId,
    }));
  }

  private patchLocalFeeStatus(feeId: string, nextStatus: FeeStatus) {
    const next = this.commissionsSubject.value.map((commission) => {
      if (nextStatus === 'ACTIVE') {
        return {
          ...commission,
          active: commission._id === feeId,
        };
      }

      if (commission._id !== feeId) {
        return commission;
      }

      return {
        ...commission,
        active: false,
      };
    });

    this.commissionsSubject.next(next);
  }

  private readMessage(response: FeeMutationResponse | null | undefined): string | undefined {
    return response?.message || undefined;
  }

  private readErrorMessage(err: unknown): string {
    const error = err as { error?: { error?: string; message?: string; details?: string }; message?: string };
    return error?.error?.error || error?.error?.message || error?.error?.details || error?.message || 'Request failed';
  }
}
=======
    // ex: 3% de la commande
    return +(orderTotalEur * (percentAbove / 100)).toFixed(2);
  }

  private seed(): Commission[] {
    const now = new Date().toISOString();
    const data: Commission[] = [
      {
        id: 'com-default',
        name: 'Default Commission',
        rule: { thresholdEur: 500, fixedUnderUsd: 1, percentAbove: 3 },
        active: true,
        createdAt: now,
      },
      {
        id: 'com-low',
        name: 'Low Commission',
        rule: { thresholdEur: 500, fixedUnderUsd: 1, percentAbove: 2 },
        active: false,
        createdAt: now,
      },
    ];
    return data;
  }
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
