import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderHistoryComponent } from './orders/order-history/order-history.component';
import { CheckoutComponent } from './orders/checkout/checkout.component';

const routes: Routes = [
  {
    path: 'history',
    component: OrderHistoryComponent
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }