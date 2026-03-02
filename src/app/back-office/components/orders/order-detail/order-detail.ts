import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { Order } from '../../../services/order';
import { OrderTimelineComponent } from '../order-timeline/order-timeline';
<<<<<<< HEAD
import { environment } from '../../../../../environments/environment';
=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

@Component({
  selector: 'app-order-detail',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, OrderTimelineComponent],
  templateUrl: './order-detail.html',
  styleUrls: ['./order-detail.css'],
})
export class OrderDetailComponent {
  @Input() order: Order | null = null;

  @Input() nextStatus: string | null = null;
  @Input() canCancel = false;

  @Output() advance = new EventEmitter<string>();
  @Output() cancel = new EventEmitter<string>();
<<<<<<< HEAD

  readonly pictureBaseUrl = environment.pictureUrl;
=======
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
}