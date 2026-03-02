import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopProduct } from '../../../services/dashboard-service';

@Component({
  selector: 'app-top-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-products.html',
  styleUrls: ['./top-products.css'],
})
export class TopProductsComponent {
  @Input() products: TopProduct[] = [];

<<<<<<< HEAD
  get max(): number {
    return this.products?.length ? Math.max(...this.products.map((p) => p.valueK)) : 1;
  }
=======
get max(): number {
  return this.products?.length ? Math.max(...this.products.map(p => p.valueK)) : 1;
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

  width(p: TopProduct): string {
    return `${(p.valueK / this.max) * 100}%`;
  }
<<<<<<< HEAD

  trackByProduct(index: number, product: TopProduct & { _id?: string; id?: string }): string | number {
    return product.productId ?? product._id ?? product.id ?? product.name ?? index;
  }
}
=======
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
