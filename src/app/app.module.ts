import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UtilityModule} from './utility-module/utility.module';
import {UserAuthModule} from './user-auth-module/user-auth.module';
import {HttpClientModule} from '@angular/common/http';
import {ToastrModule} from 'ngx-toastr';
import {globalToastConfig} from './utility-module/constants/base-constants';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UtilityModule.forRoot(),
    UserAuthModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(globalToastConfig), // ToastrModule added
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
