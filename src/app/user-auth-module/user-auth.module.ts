import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthRoutingModule } from './user-auth-routing.module';
import { LoginComponent } from './login/login.component';
import {UtilityModule} from '../utility-module/utility.module';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ForgotEmailComponent } from './forgot-password/forgot-email/forgot-email.component';
import { ForgotOtpComponent } from './forgot-password/forgot-otp/forgot-otp.component';
import { NewPasswordComponent } from './forgot-password/new-password/new-password.component';

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    UserAuthRoutingModule
  ],
  declarations: [LoginComponent, ForgotPasswordComponent, ForgotEmailComponent, ForgotOtpComponent, NewPasswordComponent]
})
export class UserAuthModule { }
