<<<<<<< HEAD
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
=======
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
import { FormsModule } from '@angular/forms';
import { tap } from 'rxjs';

import { AdminCustomersBackService } from '../../services/admin-customers-back';
import { AdminCustomersListComponent } from '../../components/admin-customers/admin-customers-list/admin-customers-list';
<<<<<<< HEAD
=======

// reuse existing components
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
import { DashboardCardComponent } from '../../../back-office/components/dashboard/dashboard-card/dashboard-card';
import { KpiCardComponent } from '../../../back-office/components/dashboard/kpi-card/kpi-card';

@Component({
  selector: 'app-admin-customers-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DashboardCardComponent,
    KpiCardComponent,
    AdminCustomersListComponent,
  ],
  templateUrl: './admin-customers-page.html',
  styleUrls: ['./admin-customers-page.css'],
})
<<<<<<< HEAD
export class AdminCustomersPage implements OnInit {
  private readonly service = inject(AdminCustomersBackService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  loading = false;
  errorMessage: string | null = null;

  readonly vm$ = this.service.vm$.pipe(
    tap((vm) => this.service.ensureSelectedFirst(vm.customers))
  );

  ngOnInit(): void {
    this.loading = true;
    this.errorMessage = null;

    this.service.loadUsers().subscribe({
      next: () => {
        this.loading = false;
      },
      error: (err: unknown) => {
        this.errorMessage = this.readError(err);
        this.loading = false;
        if (this.isBrowser) {
          window.alert(this.errorMessage);
        }
      },
    });
  }

  setSort(value: 'newest' | 'oldest') {
    this.service.setQuery({ sort: value });
  }

  setSearch(value: string) {
    this.service.setQuery({ search: value });
  }

  select(id: string) {
    this.service.select(id);
  }

  private readError(err: unknown): string {
    if (typeof err === 'object' && err !== null) {
      const maybeError = err as { error?: { message?: string; error?: string }; message?: string };
      return maybeError.error?.message || maybeError.error?.error || maybeError.message || 'Failed to load users';
    }
    return 'Failed to load users';
  }
}
=======
export class AdminCustomersPage {
  private service = inject(AdminCustomersBackService);

  vm$ = this.service.vm$.pipe(
    tap(vm => this.service.ensureSelectedFirst(vm.customers))
  );

  setSort(v: 'newest' | 'oldest') {
    this.service.setQuery({ sort: v });
  }

  setSearch(v: string) {
    this.service.setQuery({ search: v });
  }

  select(id: string) { this.service.select(id); }
  toggleStatus(id: string) { this.service.toggleStatus(id); }
  remove(id: string) {
    if (confirm('Delete this customer?')) this.service.delete(id);
  }
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
