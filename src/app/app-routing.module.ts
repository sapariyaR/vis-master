import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteConstants} from './utility-module/constants/routes';

const routes: Routes = [
  {
    path: RouteConstants.CUSTOMER,
    loadChildren: './customer-module/customer.module#CustomerModule'
  },
  {
    path: '',
    redirectTo: RouteConstants.LOGIN_ROUTE,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: RouteConstants.LOGIN_ROUTE,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
