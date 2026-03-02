<<<<<<< HEAD
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, combineLatest, forkJoin, map, of, switchMap, tap } from 'rxjs';
import { environment } from '../../../environments/environment';

export type UserRole = 'SHOP' | 'BUYER' | 'ADMIN';
export type UserStatus = 'active' | 'banned';
export type SortDir = 'newest' | 'oldest';

export interface UserRow {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  role: UserRole;
  status?: UserStatus;
  createdAt: string;
}

interface ApiUserRow {
  id?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  status?: string;
  createdAt?: string;
}

interface UsersResponse {
  users?: ApiUserRow[];
  totalPages?: number;
=======
import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, map, Observable } from 'rxjs';

export type CustomerType = 'SHOP_OWNER' | 'BUYER';
export type CustomerStatus = 'active' | 'inactive' | 'banned';
export type SortDir = 'newest' | 'oldest';

export interface AdminCustomer {
  id: string;
  fullName: string;
  company: string;
  avatarUrl: string;
  type: CustomerType;
  status: CustomerStatus;
  createdAt: string; // ISO
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
}

export interface AdminCustomersQuery {
  search: string;
  sort: SortDir;
<<<<<<< HEAD
=======
  type: CustomerType | 'all';
  status: CustomerStatus | 'all';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
}

export interface KpiCardVM {
  title: string;
  percent: number;
  trend?: 'up' | 'down';
  subtitle: string;
  linkText: string;
}

export interface AdminCustomersVM {
  kpi1: KpiCardVM;
  kpi2: KpiCardVM;
  query: AdminCustomersQuery;
<<<<<<< HEAD
  customers: UserRow[];
=======
  customers: AdminCustomer[];
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  selectedId: string | null;
}

@Injectable({ providedIn: 'root' })
export class AdminCustomersBackService {
<<<<<<< HEAD
  private readonly http = inject(HttpClient);
  private readonly apiUrl = environment.apiUrl;

  private readonly customersSubject = new BehaviorSubject<UserRow[]>([]);
  private readonly querySubject = new BehaviorSubject<AdminCustomersQuery>({
    search: '',
    sort: 'newest',
=======
  private readonly customersSubject = new BehaviorSubject<AdminCustomer[]>(this.seed());
  private readonly querySubject = new BehaviorSubject<AdminCustomersQuery>({
    search: '',
    sort: 'newest',
    type: 'all',
    status: 'all',
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  });
  private readonly selectedIdSubject = new BehaviorSubject<string | null>(null);

  readonly customers$ = this.customersSubject.asObservable();
  readonly query$ = this.querySubject.asObservable();
  readonly selectedId$ = this.selectedIdSubject.asObservable();

  readonly customersFiltered$ = combineLatest([this.customers$, this.query$]).pipe(
    map(([customers, q]) => {
      const s = q.search.trim().toLowerCase();

<<<<<<< HEAD
      const filtered = customers.filter((customer) =>
        !s ||
        customer.fullName.toLowerCase().includes(s) ||
        customer.email.toLowerCase().includes(s) ||
        customer.phone.toLowerCase().includes(s) ||
        customer.role.toLowerCase().includes(s)
      );
=======
      const filtered = customers.filter(c => {
        const matchSearch =
          !s || c.fullName.toLowerCase().includes(s) || c.company.toLowerCase().includes(s);

        const matchType = q.type === 'all' || c.type === q.type;
        const matchStatus = q.status === 'all' || c.status === q.status;

        return matchSearch && matchType && matchStatus;
      });
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

      return [...filtered].sort((a, b) => {
        const da = new Date(a.createdAt).getTime();
        const db = new Date(b.createdAt).getTime();
        return q.sort === 'newest' ? db - da : da - db;
      });
    })
  );

  readonly vm$: Observable<AdminCustomersVM> = combineLatest({
    query: this.query$,
    customers: this.customersFiltered$,
<<<<<<< HEAD
    allCustomers: this.customers$,
    selectedId: this.selectedId$,
  }).pipe(
    map(({ allCustomers, ...vm }) => ({
      ...vm,
      kpi1: {
        title: 'Users',
        percent: allCustomers.length,
        subtitle: 'All registered users',
        linkText: 'Users list',
      },
      kpi2: {
        title: 'Shop owners',
        percent: allCustomers.filter((customer) => customer.role === 'SHOP').length,
        subtitle: 'Accounts with SHOP role',
        linkText: 'Role breakdown',
=======
    selectedId: this.selectedId$,
  }).pipe(
    map(vm => ({
      ...vm,
      kpi1: {
        title: 'Total des commmande traitee',
        percent: 15,
        trend: 'up',
        subtitle: 'Increase compared to last week',
        linkText: 'Revenues report →',
      },
      kpi2: {
        title: 'Commande en attente',
        percent: 4,
        subtitle: 'You closed 96 out of 100 deals',
        linkText: 'All deals →',
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
      },
    }))
  );

<<<<<<< HEAD
  loadUsers(): Observable<UserRow[]> {
    const limit = 100;
    return this.fetchUsersPage(1, limit).pipe(
      switchMap((firstPage) => {
        const firstUsers = firstPage.users ?? [];
        const totalPages = Math.max(Number(firstPage.totalPages ?? 1), 1);

        if (totalPages <= 1) {
          return of(firstUsers);
        }

        const remainingRequests = Array.from({ length: totalPages - 1 }, (_, index) =>
          this.fetchUsersPage(index + 2, limit).pipe(map((response) => response.users ?? []))
        );

        return forkJoin(remainingRequests).pipe(
          map((pages) => firstUsers.concat(...pages))
        );
      }),
      map((users) => users.map((user) => this.mapUser(user))),
      tap((users) => {
        this.customersSubject.next(users);
        if (this.selectedIdSubject.value && !users.some((user) => user.id === this.selectedIdSubject.value)) {
          this.selectedIdSubject.next(users[0]?.id ?? null);
        }
      })
    );
  }

=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  setQuery(patch: Partial<AdminCustomersQuery>) {
    this.querySubject.next({ ...this.querySubject.value, ...patch });
  }

  select(id: string) {
    this.selectedIdSubject.next(id);
  }

<<<<<<< HEAD
  ensureSelectedFirst(list: UserRow[]) {
=======
  ensureSelectedFirst(list: AdminCustomer[]) {
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    if (!this.selectedIdSubject.value && list.length) {
      this.selectedIdSubject.next(list[0].id);
    }
  }

<<<<<<< HEAD
  private fetchUsersPage(page: number, limit: number): Observable<UsersResponse> {
    return this.http.get<UsersResponse>(`${this.apiUrl}users`, {
      params: { page, limit },
      withCredentials: true,
    });
  }

  private mapUser(user: ApiUserRow): UserRow {
    const role = String(user.role ?? 'BUYER').toUpperCase() as UserRole;
    const status = String(user.status ?? '').toLowerCase();

    return {
      id: String(user.id ?? ''),
      fullName: String(user.fullName ?? ''),
      email: String(user.email ?? ''),
      phone: String(user.phone ?? ''),
      role,
      status: status === 'active' || status === 'banned' ? status : undefined,
      createdAt: String(user.createdAt ?? ''),
    };
  }
}

export { AdminCustomersBackService as AdminCustomersBack };
=======
  toggleStatus(id: string) {
    const next: AdminCustomer[] = this.customersSubject.value.map((c): AdminCustomer => {
      if (c.id !== id) return c;

      // IMPORTANT: on force le type union (pas string)
      const status: CustomerStatus =
        c.status === 'active' ? 'inactive' : 'active';

      return { ...c, status };
    });

    this.customersSubject.next(next);
  }

  delete(id: string) {
    const next: AdminCustomer[] = this.customersSubject.value.filter(c => c.id !== id);
    this.customersSubject.next(next);

    if (this.selectedIdSubject.value === id) {
      this.selectedIdSubject.next(next[0]?.id ?? null);
    }
  }

  private seed(): AdminCustomer[] {
    const a = (img: number) => `https://i.pravatar.cc/80?img=${img}`;
    const now = Date.now();

    const data: AdminCustomer[] = [
      {
        id: 'c1',
        fullName: 'Chris Friedly',
        company: 'Supermarket Villanova',
        avatarUrl: a(11),
        type: 'BUYER',
        status: 'active',
        createdAt: new Date(now - 1 * 86400000).toISOString(),
      },
      {
        id: 'c2',
        fullName: 'Maggie Johnson',
        company: 'Oasis Organic Inc.',
        avatarUrl: a(12),
        type: 'SHOP_OWNER',
        status: 'active',
        createdAt: new Date(now - 2 * 86400000).toISOString(),
      },
      {
        id: 'c3',
        fullName: 'Gael Harry',
        company: 'New York Finest Fruits',
        avatarUrl: a(13),
        type: 'BUYER',
        status: 'active',
        createdAt: new Date(now - 3 * 86400000).toISOString(),
      },
      {
        id: 'c4',
        fullName: 'Jenna Sullivan',
        company: 'Walmart',
        avatarUrl: a(14),
        type: 'BUYER',
        status: 'banned',
        createdAt: new Date(now - 4 * 86400000).toISOString(),
      },
    ];

    return data;
  }
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
