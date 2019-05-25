import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  // { path: '', component: LayoutComponent, redirectTo: 'layout' },
  {
    path: '', 
    component: LayoutComponent,
    children:[
      { path: '', redirectTo: 'customer'},
      { path: 'customer', loadChildren: './components/customer/customer.module#CustomerModule' },
      { path: 'order', loadChildren: './components/order/order.module#OrderModule' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
