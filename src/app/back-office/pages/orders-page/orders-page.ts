<<<<<<< HEAD
import { Component, OnInit, PLATFORM_ID, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
=======
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
import { OrdersBackService } from '../../services/order';
import { OrdersFiltersComponent } from '../../components/orders/orders-filters/orders-filters';
import { OrdersTableComponent } from '../../components/orders/orders-table/orders-table';
import { OrderDetailComponent } from '../../components/orders/order-detail/order-detail';
import { map, tap } from 'rxjs';
<<<<<<< HEAD
import { SelectedShopStateService } from '../../services/selected-shop-state.service';
import { isPlatformBrowser } from '@angular/common';
=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

@Component({
  selector: 'app-orders-page',
  standalone: true,
  imports: [CommonModule, OrdersFiltersComponent, OrdersTableComponent, OrderDetailComponent],
  templateUrl: './orders-page.html',
  styleUrls: ['./orders-page.css'],
})
<<<<<<< HEAD
export class OrdersPage implements OnInit {
  private readonly service = inject(OrdersBackService);
  private readonly selectedShopState = inject(SelectedShopStateService);
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly isBrowser = isPlatformBrowser(this.platformId);

  loading = false;
  errorMessage: string | null = null;
  noShopMessage: string | null = null;

=======
export class OrdersPage {
  private service = inject(OrdersBackService);
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  vm$ = this.service.vm$.pipe(
    tap(vm => this.service.ensureSelectedFirst(vm.orders))
  );

<<<<<<< HEAD
  ngOnInit(): void {
    const routeShopId = (this.route.snapshot.paramMap.get('shopId') ?? '').trim();
    const selectedShopId = (this.selectedShopState.snapshot?._id ?? '').trim();

    if (!routeShopId || !selectedShopId || routeShopId !== selectedShopId) {
      this.noShopMessage = 'Please select a shop first.';
      if (this.isBrowser) {
        window.alert(this.noShopMessage);
      }
      this.router.navigate(['/shop']);
      return;
    }

    this.loading = true;
    this.errorMessage = null;

    this.service.loadOrders(selectedShopId).subscribe({
      error: (err: unknown) => {
        this.errorMessage = this.readError(err);
        if (this.isBrowser) {
          window.alert(this.errorMessage);
        }
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      },
    });
  }

  setQuery(p: any) { this.service.setQuery(p); }
  select(id: string) { this.service.select(id); }

  advance(id: string) {
    this.errorMessage = null;
    this.service.advance(id).subscribe({
      error: (err: unknown) => {
        this.errorMessage = this.readError(err);
        if (this.isBrowser) {
          window.alert(this.errorMessage);
        }
      },
    });
  }

  cancel(id: string) {
    this.errorMessage = null;
    this.service.cancel(id).subscribe({
      error: (err: unknown) => {
        this.errorMessage = this.readError(err);
        if (this.isBrowser) {
          window.alert(this.errorMessage);
        }
      },
    });
  }
=======
  setQuery(p: any) { this.service.setQuery(p); }
  select(id: string) { this.service.select(id); }

  advance(id: string) { this.service.advance(id); }
  cancel(id: string) { this.service.cancel(id); }
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

  // helpers pour le template
  nextStatus$ = this.service.selectedOrder$.pipe(map(o => (o ? this.service.nextStatus(o) : null)));
  canCancel$ = this.service.selectedOrder$.pipe(map(o => (o ? this.service.canCancel(o) : false)));
  selectedId$ = this.service.selectedId$;
<<<<<<< HEAD

  private readError(err: unknown): string {
    if (typeof err === 'object' && err !== null) {
      const maybeError = err as { error?: { message?: string }; message?: string };
      return maybeError.error?.message || maybeError.message || 'Orders action failed';
    }
    return 'Orders action failed';
  }
=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
}