import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomerComponent } from './customer/customer.component';
import { HierarchyComponent } from './hierarchy/hierarchy.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGaurd } from './auth-gaurd.service';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: 'orders',
    component: OrdersComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: 'customer',
    component: CustomerComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: 'hierarchy',
    component: HierarchyComponent,
    canActivate: [AuthGaurd]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
