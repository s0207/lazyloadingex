import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrderComponent } from './order.component';
import { AddorderComponent } from './addorder/addorder.component';

@NgModule({
  imports: [
    CommonModule,
    OrderRoutingModule
  ],
  declarations: [OrderComponent,OrderlistComponent, AddorderComponent]
})
export class OrderModule { }
