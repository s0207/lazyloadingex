import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { ViewcustomerComponent } from './viewcustomer/viewcustomer.component';

@NgModule({
  imports: [
    CommonModule,
    CustomerRoutingModule
  ],
  declarations: [CustomerComponent, CustomerlistComponent, ViewcustomerComponent]
})
export class CustomerModule { }
