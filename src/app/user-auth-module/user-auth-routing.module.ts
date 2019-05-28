import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RouteConstants} from '../utility-module/constants/routes';
import {LoginComponent} from './login/login.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';

const routes: Routes = [
  {
    path: RouteConstants.LOGIN_ROUTE,
    component: LoginComponent
  },
  {
    path: RouteConstants.FORGOT_PASSWORD_ROUTE,
    component: ForgotPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserAuthRoutingModule { }
