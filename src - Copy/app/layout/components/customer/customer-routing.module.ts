import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';


const routes: Routes = [
  // {
  //   path: "order",
  //   component: OrderComponent,
  //   children: [
  //     {
  //       path: "list",
  //       component: ListOrderComponent
  //     },
  //     {
  //       path: "add",
  //       component: AddOrderComponent
  //     }
  //   ]

  // }
  { path: "list", component: ListCustomerComponent },
  { path: "add", component: AddCustomerComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
