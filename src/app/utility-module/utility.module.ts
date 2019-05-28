import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BaseComponent} from './shared-component/base/base.component';
import {PageNotFoundComponent} from './shared-component/page-not-found/page-not-found.component';
import {ProgressHudComponent} from './shared-component/progress-hud/progress-hud.component';
import {ValidationComponent} from './shared-component/validation/validation.component';
import {FocusDirective} from './directives/focus.directive';
import {DisableControlDirective} from './directives/disable-control.directive';
import {SafeHTMLPipe} from './pipes/safe-html.pipe';
import {CheckEmptyPipe, PlaceNAPipe} from './pipes/checkEmpty.pipe';
import {SortPipe} from './pipes/filter-pipe.pipe';
import {LocaleNumberPipe} from './pipes/locale-number.pipe';
import {FormatTimePipe} from './pipes/timer.pipe';
import {HttpInterceptors} from './http-interceptors/index-Interceptor';
import {MaterialImportsModule} from './material-imports/material-imports.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedService} from './shared-service/shared.service';
import {SharedUserService} from './shared-service/shared-user.service';
import {APIManager} from './shared-service/apimanager.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialImportsModule,
  ],
  declarations: [
    BaseComponent,
    PageNotFoundComponent,
    ProgressHudComponent,
    ValidationComponent,
    FocusDirective,
    DisableControlDirective,
    SafeHTMLPipe,
    CheckEmptyPipe,
    PlaceNAPipe,
    SortPipe,
    LocaleNumberPipe,
    FormatTimePipe
  
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MaterialImportsModule,
    BaseComponent,
    PageNotFoundComponent,
    ProgressHudComponent,
    ValidationComponent
  ]
})
export class UtilityModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: UtilityModule,
      providers: [
        SharedService,
        SharedUserService,
        HttpInterceptors,
        APIManager
      ]
    };
  }
}
