<<<<<<< HEAD
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, map, of, tap, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
=======
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map } from 'rxjs';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

export type SortDir = 'newest' | 'oldest';

export interface Customer {
  id: string;
  fullName: string;
<<<<<<< HEAD
  email: string;
  phone: string;
  address: string;
  lastOrderDate: string;
  totalOrders: number;
  totalSpent: number;
}

interface ApiCustomer {
  id?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  address?: string;
  lastOrderDate?: string;
  totalOrders?: number;
  totalSpent?: number;
}

interface ShopCustomersResponse {
  customers?: ApiCustomer[];
=======
  company: string;
  avatarUrl: string;
  createdAt: string; // ISO (pour "Sort by Newest")
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
}

export interface CustomersQuery {
  search: string;
  sort: SortDir;
}

export interface KpiCard {
  title: string;
  percent: number;
  trend?: 'up' | 'down';
  subtitle: string;
  linkText: string;
}

@Injectable({ providedIn: 'root' })
export class CustomersBackService {
<<<<<<< HEAD
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  private readonly customersSubject = new BehaviorSubject<Customer[]>([]);
=======
  private readonly customersSubject = new BehaviorSubject<Customer[]>(this.seed());
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  private readonly querySubject = new BehaviorSubject<CustomersQuery>({ search: '', sort: 'newest' });
  private readonly selectedIdSubject = new BehaviorSubject<string | null>(null);

  readonly customers$ = this.customersSubject.asObservable();
  readonly query$ = this.querySubject.asObservable();
  readonly selectedId$ = this.selectedIdSubject.asObservable();

<<<<<<< HEAD
=======
  readonly kpi1: KpiCard = {
    title: 'Total des commande traitee',
    percent: 15,
    trend: 'up',
    subtitle: 'Increase compared to last week',
    linkText: 'Revenues report →',
  };

  readonly kpi2: KpiCard = {
    title: 'Commande en attente',
    percent: 4,
    subtitle: 'You closed 96 out of 100 deals',
    linkText: 'All deals →',
  };

>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  readonly customersFiltered$ = combineLatest([this.customers$, this.query$]).pipe(
    map(([customers, q]) => {
      const s = q.search.trim().toLowerCase();

<<<<<<< HEAD
      const filtered = customers.filter((customer) =>
        !s ||
        customer.fullName.toLowerCase().includes(s) ||
        customer.email.toLowerCase().includes(s) ||
        customer.phone.toLowerCase().includes(s) ||
        customer.address.toLowerCase().includes(s)
      );

      return [...filtered].sort((a, b) => {
        const da = new Date(a.lastOrderDate).getTime();
        const db = new Date(b.lastOrderDate).getTime();
        return q.sort === 'newest' ? db - da : da - db;
      });
=======
      const filtered = customers.filter(c =>
        !s ||
        c.fullName.toLowerCase().includes(s) ||
        c.company.toLowerCase().includes(s)
      );

      const sorted = [...filtered].sort((a, b) => {
        const da = new Date(a.createdAt).getTime();
        const db = new Date(b.createdAt).getTime();
        return q.sort === 'newest' ? db - da : da - db;
      });

      return sorted;
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    })
  );

  readonly vm$ = combineLatest({
<<<<<<< HEAD
    kpi1: this.customers$.pipe(
      map((customers): KpiCard => ({
        title: 'Customers',
        percent: customers.length,
        subtitle: 'Unique buyers for this shop',
        linkText: 'Customers list',
      }))
    ),
    kpi2: this.customers$.pipe(
      map((customers): KpiCard => {
        const repeatCustomers = customers.filter((customer) => customer.totalOrders > 1).length;
        return {
          title: 'Returning customers',
          percent: repeatCustomers,
          subtitle: 'Customers with more than one order',
          linkText: 'Orders history',
        };
      })
    ),
=======
    kpi1: new BehaviorSubject(this.kpi1),
    kpi2: new BehaviorSubject(this.kpi2),
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    query: this.query$,
    selectedId: this.selectedId$,
    customers: this.customersFiltered$,
  });

<<<<<<< HEAD
  loadShopCustomers(shopId: string): Observable<Customer[]> {
    return this.http
      .get<ShopCustomersResponse>(`${this.apiUrl}shops/${shopId}/customers`, { withCredentials: true })
      .pipe(
        map((response) => (response.customers ?? []).map((customer) => this.mapCustomer(customer))),
        catchError((error: unknown) => {
          if (error instanceof HttpErrorResponse && error.status === 404) {
            return of([]);
          }
          return throwError(() => error);
        }),
        tap((customers) => {
          this.customersSubject.next(customers);
          if (this.selectedIdSubject.value && !customers.some((customer) => customer.id === this.selectedIdSubject.value)) {
            this.selectedIdSubject.next(customers[0]?.id ?? null);
          }
        })
      );
  }

=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  setQuery(patch: Partial<CustomersQuery>) {
    this.querySubject.next({ ...this.querySubject.value, ...patch });
  }

  select(id: string) {
    this.selectedIdSubject.next(id);
  }

  ensureSelectedFirst(list: Customer[]) {
    if (!this.selectedIdSubject.value && list.length) {
      this.selectedIdSubject.next(list[0].id);
    }
  }

<<<<<<< HEAD
  private mapCustomer(customer: ApiCustomer): Customer {
    return {
      id: String(customer.id ?? ''),
      fullName: String(customer.fullName ?? ''),
      email: String(customer.email ?? ''),
      phone: String(customer.phone ?? ''),
      address: String(customer.address ?? ''),
      lastOrderDate: String(customer.lastOrderDate ?? ''),
      totalOrders: Number(customer.totalOrders ?? 0),
      totalSpent: Number(customer.totalSpent ?? 0),
    };
  }
}

export { CustomersBackService as CustomersBack };
=======
  delete(id: string) {
    const next = this.customersSubject.value.filter(c => c.id !== id);
    this.customersSubject.next(next);
    if (this.selectedIdSubject.value === id) this.selectedIdSubject.next(next[0]?.id ?? null);
  }

  private seed(): Customer[] {
    const a = (img: number) => `https://i.pravatar.cc/80?img=${img}`;
    const now = Date.now();
    return [
      { id: 'c1', fullName: 'Chris Friedly',  company: 'Supermarket Villanova', avatarUrl: a(11), createdAt: new Date(now - 1*86400000).toISOString() },
      { id: 'c2', fullName: 'Maggie Johnson', company: 'Oasis Organic Inc.',     avatarUrl: a(12), createdAt: new Date(now - 2*86400000).toISOString() },
      { id: 'c3', fullName: 'Gael Harry',     company: 'New York Finest Fruits', avatarUrl: a(13), createdAt: new Date(now - 3*86400000).toISOString() },
      { id: 'c4', fullName: 'Jenna Sullivan', company: 'Walmart',                avatarUrl: a(14), createdAt: new Date(now - 4*86400000).toISOString() },
    ];
  }
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
