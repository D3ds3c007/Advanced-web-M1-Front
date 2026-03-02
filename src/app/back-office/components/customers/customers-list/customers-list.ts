import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Customer } from '../../../services/customers-back';

@Component({
  selector: 'app-customers-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customers-list.html',
  styleUrls: ['./customers-list.css'],
})
export class CustomersListComponent {
  @Input() customers: Customer[] = [];
  @Input() selectedId: string | null = null;

  @Output() select = new EventEmitter<string>();
<<<<<<< HEAD

  trackById(_index: number, customer: Customer): string {
    return customer.id;
  }
}

export { CustomersListComponent as CustomersList };
=======
  @Output() edit = new EventEmitter<Customer>();
  @Output() remove = new EventEmitter<Customer>();
  @Output() call = new EventEmitter<Customer>();
}
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
