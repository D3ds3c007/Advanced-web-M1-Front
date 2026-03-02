<<<<<<< HEAD
import { Component, inject, signal } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { finalize, take } from 'rxjs/operators';

import { DetailsLayout } from '../details-layout/details-layout';
import { ProductDetailsComponent } from '../../components/product-detail-component/product-detail-component';
import { CartService } from '../../services/cart.service';
=======
import { Component, inject } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';

import { DetailsLayout } from '../details-layout/details-layout';
import { ProductDetailsComponent } from '../../components/product-detail-component/product-detail-component';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
import { ProductService, Product } from '../../services/product.service';

@Component({
  selector: 'app-product-details-page',
  standalone: true,
  imports: [DetailsLayout, ProductDetailsComponent, NgIf, AsyncPipe],
  templateUrl: './product-detail-page.html',
})
export class ProductDetailsPage {
  private readonly route = inject(ActivatedRoute);
  private readonly productService = inject(ProductService);
<<<<<<< HEAD
  private readonly cartService = inject(CartService);

  readonly addingProductId = signal<string | null>(null);
  readonly addedProductId = signal<string | null>(null);
=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

  readonly product$ = this.route.paramMap.pipe(
    map(pm => pm.get('id')),
    filter((id): id is string => !!id),
    switchMap(id => this.productService.getProductById(id))
  );

  onAddToCart(e: { productId: string; quantity: number }) {
<<<<<<< HEAD
    this.addingProductId.set(e.productId);

    this.cartService
      .addItem(e.productId, e.quantity)
      .pipe(
        take(1),
        finalize(() => this.addingProductId.set(null))
      )
      .subscribe({
        next: () => {
          this.addedProductId.set(e.productId);
          setTimeout(() => this.addedProductId.set(null), 1200);
        },
      });
=======
    // tu as déjà une méthode dans ton service
    this.productService.handleAddToCart(e);
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
  }

  trackByProductId(_i: number, p: Product) {
    return p.id;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
