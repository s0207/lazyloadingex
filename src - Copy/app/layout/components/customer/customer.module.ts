import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerRoutingModule } from './customer-routing.module';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';


@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [AddCustomerComponent,ListCustomerComponent]
})
export class CustomerModule { }
