import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { AddOrderComponent } from './add-order/add-order.component';
import { ListOrderComponent } from './list-order/list-order.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [AddOrderComponent, ListOrderComponent]
})
export class OrderModule { }
