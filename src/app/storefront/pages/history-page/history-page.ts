<<<<<<< HEAD
import { Component, inject } from '@angular/core';
import { DetailsLayout } from '../details-layout/details-layout';
import { HistoryComponent } from '../../components/history/history';
import { CheckoutHeaderComponent } from '../../components/checkout-header/checkout-header';
import { OrderFromServer, OrderService } from '../../services/order.service';
=======
import { Component } from '@angular/core';
import { DetailsLayout } from '../details-layout/details-layout';
import { HistoryComponent } from '../../components/history/history';
import { CheckoutHeaderComponent } from '../../components/checkout-header/checkout-header';
>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83

@Component({
  selector: 'app-history-page',
  imports: [
    DetailsLayout,
    HistoryComponent,
    CheckoutHeaderComponent
  ],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css',
})
export class HistoryPage {
<<<<<<< HEAD
  
=======

>>>>>>> c399b0eb74f13d24784e0c47f85572cc2a7cfb83
}
