import { ChangeDetectionStrategy, Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';

import { Category } from '../../../services/product.service';

@Component({
  selector: 'app-category-filter',
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [FormsModule, NzSelectModule]
})
export class CategoryFilterComponent {
  readonly categories = input<Category[]>([]);
  readonly selectedIds = input<string[]>([]);
  readonly selectionChange = output<string[]>();

  updateSelection(categoryId: string | null): void {
    this.selectionChange.emit(categoryId ? [categoryId] : []);
  }
}
