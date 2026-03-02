import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { Observable, forkJoin, of } from 'rxjs';
import { catchError, map, shareReplay, switchMap, take } from 'rxjs/operators';

import { CartItemsState, CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
<<<<<<< HEAD
import { OrderService } from '../../services/order.service';
import { APP_CURRENCY } from '../../../core/constants/app-locale';
=======
import { OrderService } from '../../services/order';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

type PaymentMethod = 'COD' | 'MOBILE_MONEY';

type DeliveryOption = { id: string; label: string; fee: number };

type Product = {
  id: string;
  name: string;
  price: number;
  imageUrl?: string;
  info?: string;
<<<<<<< HEAD
  shopId?: string;
=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
};

type CheckoutLine = {
  productId: string;
  quantity: number;
  product: Product;
<<<<<<< HEAD
  shopId: string;
};

export type CheckoutPayload = {
  buyer: {
    phone: string;
    address: string;
    paymentMethod: string;
  };
  items: Array<{ productId: string; shopId: string; qty: number }>;
=======
};

export type CheckoutPayload = {
  delivery: {
    fullName: string;
    phone: string;
    address: string;
    note?: string;
  };
  payment: {
    method: PaymentMethod;
    // mock mobile money
    provider?: string;
    mmNumber?: string;
  };
  deliveryOption: DeliveryOption;
  items: Array<{ productId: string; quantity: number; unitPrice: number }>;
  subtotal: number;
  total: number;
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
};

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './checkout-component.html',
  styleUrls: ['./checkout-component.css'],
})
export class CheckoutComponent {
  private orderService = inject(OrderService);
  private cartService = inject(CartService);
  private productService = inject(ProductService);
  private fb = inject(FormBuilder);

  @Output() confirmed = new EventEmitter<CheckoutPayload>();

<<<<<<< HEAD
  currencyCode = APP_CURRENCY;
  submitting = false;

  deliveryOptions: DeliveryOption[] = [
    { id: 'standard', label: 'Standard delivery (2-4 days)', fee: 4.99 },
    { id: 'express', label: 'Express delivery (24-48h)', fee: 9.99 },
    { id: 'pickup', label: 'Store pickup', fee: 0 },
  ];

  form = this.fb.group({
    phone: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    deliveryId: [this.deliveryOptions[0].id, [Validators.required]],
    provider: ['', [Validators.required]],
=======
  currencyCode = 'EUR';
  submitting = false;

  deliveryOptions: DeliveryOption[] = [
    { id: 'standard', label: 'Livraison standard (2–4 jours)', fee: 4.99 },
    { id: 'express', label: 'Livraison express (24–48h)', fee: 9.99 },
    { id: 'pickup', label: 'Retrait en magasin', fee: 0 },
  ];

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required]],
    address: ['', [Validators.required, Validators.minLength(5)]],
    note: [''],

    deliveryId: [this.deliveryOptions[0].id, [Validators.required]],

    paymentMethod: ['COD' as PaymentMethod, [Validators.required]],
    // mobile money mock (optionnel)
    provider: ['MTN'],
    mmNumber: [''],
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  });

  cartState$ = this.cartService.cartItems$;

  lines$: Observable<CheckoutLine[]> = this.cartState$.pipe(
    map((state: CartItemsState) =>
      Object.entries(state).map(([productId, quantity]) => ({ productId, quantity }))
    ),
    switchMap((entries) => {
      if (entries.length === 0) return of([]);

      return forkJoin(
        entries.map(({ productId, quantity }) =>
          this.loadProduct$(productId).pipe(
            take(1),
<<<<<<< HEAD
            map((product) => ({ productId, quantity, product, shopId: product.shopId ?? '' })),
=======
            map((product) => ({ productId, quantity, product })),
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
            catchError((err) => {
              console.error('Unable to load product', productId, err);
              return of({
                productId,
                quantity,
<<<<<<< HEAD
                product: { id: productId, name: 'Unavailable product', price: 0, imageUrl: '', shopId: '' },
                shopId: ''
=======
                product: { id: productId, name: 'Produit indisponible', price: 0, imageUrl: '' },
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
              } as CheckoutLine);
            })
          )
        )
      );
    }),
    shareReplay(1)
  );

  trackByProductId = (_: number, line: CheckoutLine) => line.productId;

<<<<<<< HEAD
=======
  // ----- Totaux -----
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  subtotal(lines: CheckoutLine[]): number {
    return lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
  }

  selectedDelivery(): DeliveryOption {
    const id = this.form.value.deliveryId!;
    return this.deliveryOptions.find(o => o.id === id) ?? this.deliveryOptions[0];
  }

  deliveryFee(): number {
    return this.selectedDelivery().fee;
  }

  total(lines: CheckoutLine[]): number {
<<<<<<< HEAD
    return this.subtotal(lines);
  }

  confirm(lines: CheckoutLine[]) {
    console.log('Confirming order with lines:', lines);
=======
    return this.subtotal(lines) + this.deliveryFee();
  }

  // ----- Confirm -----
  confirm(lines: CheckoutLine[]) {
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    if (lines.length === 0) return;

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

<<<<<<< HEAD
    const missing = lines.filter(l => !l.shopId);
    if (missing.length) {
      console.error('Cannot create order: missing shopId for some items', missing);
      this.form.setErrors?.({ missingShopId: true });
      return;
    }

    const v = this.form.getRawValue();
    const payload: CheckoutPayload = {
      buyer: {
        phone: v.phone!,
        address: v.address!,
        paymentMethod: v.provider!
      },
      items: lines.map(l => ({
        productId: l.productId,
        qty: l.quantity,
        shopId: l.shopId,
      })),
    };

    console.log('Prepared payload:', payload);

    this.orderService.submitOrder(payload).subscribe({
      next: (res) => {
        console.log('Order submitted successfully', res);
        this.submitting = false;
        this.confirmed.emit(payload);
      },
      error: (err) => {
        console.error('Error submitting order', err);
        this.submitting = false;
      }
    });

    this.submitting = true;
    window.location.href = '/orders';
  }

=======
    const v = this.form.getRawValue();
    const payload: CheckoutPayload = {
      delivery: {
        fullName: v.fullName!,
        phone: v.phone!,
        address: v.address!,
        note: v.note ?? '',
      },
      payment: {
        method: v.paymentMethod!,
        provider: v.paymentMethod === 'MOBILE_MONEY' ? (v.provider ?? '') : undefined,
        mmNumber: v.paymentMethod === 'MOBILE_MONEY' ? (v.mmNumber ?? '') : undefined,
      },
      deliveryOption: this.selectedDelivery(),
      items: lines.map(l => ({
        productId: l.productId,
        quantity: l.quantity,
        unitPrice: l.product.price,
      })),
      subtotal: this.subtotal(lines),
      total: this.total(lines),
    };

    this.submitting = true;

    // Mock submit (tu peux remplacer par un OrderService + HTTP)
    setTimeout(() => {
      this.submitting = false;
      this.confirmed.emit(payload);

      // Optionnel: vider le panier si tu as clear()
      // (this.cartService as any).clear?.().subscribe?.();
      console.log('ORDER CONFIRMED', payload);
    }, 700);
  }

  // ----- Produit (adapter si ton ProductService a un autre nom) -----
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  private loadProduct$(id: string): Observable<Product> {
    const ps: any = this.productService;
    const obs: Observable<any> =
      ps.getProductById?.(id) ??
      ps.getProduct?.(id);

    if (!obs) {
<<<<<<< HEAD
      throw new Error('ProductService must expose getProductById(id) or getProduct(id).');
=======
      throw new Error(`ProductService doit exposer getProductById(id) ou getProduct(id).`);
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
    }

    return obs.pipe(
      map((p: any) => ({
        id: p.id ?? id,
<<<<<<< HEAD
        name: p.name ?? p.title ?? 'Product',
        price: Number(p.price ?? 0),
        imageUrl: p.imageUrl ?? p.image ?? p.thumbnailUrl ?? '',
        info: p.info ?? p.shortDescription ?? p.brand ?? '',
        shopId: p.shopId ?? p.shop?._id ?? p.storeId ?? '',
      }))
    );
  }
}
=======
        name: p.name ?? p.title ?? 'Produit',
        price: Number(p.price ?? 0),
        imageUrl: p.imageUrl ?? p.image ?? p.thumbnailUrl ?? '',
        info: p.info ?? p.shortDescription ?? p.brand ?? '',
      }))
    );
  }
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
