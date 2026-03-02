import { Component, Input } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderStatus, OrderStatusEvent } from '../../../services/order';

@Component({
  selector: 'app-order-timeline',
  standalone: true,
  imports: [CommonModule, DatePipe],
  templateUrl: './order-timeline.html',
  styleUrls: ['./order-timeline.css'],
})
export class OrderTimelineComponent {
  @Input() status!: OrderStatus;
  @Input() history: OrderStatusEvent[] = [];

<<<<<<< HEAD
  steps: OrderStatus[] = ['pending', 'confirmed', 'preparing', 'ready', 'delivered'];
=======
  steps: OrderStatus[] = ['PENDING', 'confirmed', 'preparing', 'ready', 'delivered'];
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

  isDone(step: OrderStatus): boolean {
    if (this.status === 'cancelled') return false;
    return this.steps.indexOf(step) <= this.steps.indexOf(this.status);
  }
}