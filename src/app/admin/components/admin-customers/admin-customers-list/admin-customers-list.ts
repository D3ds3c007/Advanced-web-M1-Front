import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
<<<<<<< HEAD
import { UserRow } from '../../../services/admin-customers-back';
=======
import { AdminCustomer } from '../../../services/admin-customers-back';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

@Component({
  selector: 'app-admin-customers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin-customers-list.html',
  styleUrls: ['./admin-customers-list.css'],
})
export class AdminCustomersListComponent {
<<<<<<< HEAD
  @Input() customers: UserRow[] = [];
  @Input() selectedId: string | null = null;

  @Output() select = new EventEmitter<string>();
=======
  @Input() customers: AdminCustomer[] = [];
  @Input() selectedId: string | null = null;

  @Output() select = new EventEmitter<string>();
  @Output() toggleStatus = new EventEmitter<string>();
  @Output() remove = new EventEmitter<string>();
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

  isActiveRow(id: string) {
    return this.selectedId === id;
  }
<<<<<<< HEAD

  trackById(_index: number, customer: UserRow): string {
    return customer.id;
  }
}

export { AdminCustomersListComponent as AdminCustomersList };
=======
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
