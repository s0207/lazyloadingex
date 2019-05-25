import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LayoutComponent } from './layout.component';
import { CustomerModule } from './components/customer/customer.module';
import { OrderModule } from './components/order/order.module';



@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule,
    CustomerModule,
    OrderModule
  ],
  declarations: [LayoutComponent,SidebarComponent]
})
export class LayoutModule { }
