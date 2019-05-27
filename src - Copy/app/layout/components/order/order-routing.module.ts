import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddOrderComponent } from './add-order/add-order.component';
import { ListOrderComponent } from './list-order/list-order.component';

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
  { path: "list", component: ListOrderComponent },
  { path: "add", component: AddOrderComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
