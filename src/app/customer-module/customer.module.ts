import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CustomerRoutingModule} from './customer-routing.module';
import {HomeComponent} from './home/home.component';
import {SidebarMenuComponent} from './sidebar-menu/sidebar-menu.component';
import {HeaderComponent} from './header/header.component';
import {UtilityModule} from '../utility-module/utility.module';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddUserComponent} from './add-user/add-user.component';
import {VolunteerRegistrationComponent} from './volunteer-registration/volunteer-registration.component';
import {DepartmentMasterComponent} from './masters/department-master/department-master.component';
import {ReportsComponent} from './reports/reports.component';
import { AttandanceReportComponent } from './reports/attandance-report/attandance-report.component';
import { RegistrationReportComponent } from './reports/registration-report/registration-report.component';
import { UserTypeComponent } from './masters/user-type/user-type.component';
import { PositionComponent } from './masters/position/position.component';
import { WorkComponent } from './masters/work/work.component';
import { FestivalComponent } from './masters/festival/festival.component';
import { DaysComponent } from './masters/days/days.component';
import { ZoneComponent } from './masters/zone/zone.component';
import { DaysListComponent } from './masters-list/days-list/days-list.component';
import { FestivalListComponent } from './masters-list/festival-list/festival-list.component';
import { PositionListComponent } from './masters-list/position-list/position-list.component';
import { UserTypeListComponent } from './masters-list/user-type-list/user-type-list.component';
import { WorkListComponent } from './masters-list/work-list/work-list.component';
import { ZoneListComponent } from './masters-list/zone-list/zone-list.component';
import {DepartmentListComponent} from './masters-list/department-list/department-list.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { ViewAttandanceComponent } from './reports/view-attandance/view-attandance.component';
import { VolunteerRegistrationReportsComponent } from './reports/registration-report/volunteer-registration-reports/volunteer-registration-reports.component';
import { AddUserListComponent } from './add-user-list/add-user-list.component';
import { VolunteerRegistrationListComponent } from './volunteer-registration-list/volunteer-registration-list.component';
import { AddRoleListComponent } from './add-role-list/add-role-list.component';

@NgModule({
  imports: [
    CommonModule,
    UtilityModule,
    CustomerRoutingModule
  ],
  declarations: [
    HomeComponent,
    SidebarMenuComponent,
    HeaderComponent,
    DashboardComponent,
    AddUserComponent,
    VolunteerRegistrationComponent,
    DepartmentMasterComponent,
    ReportsComponent,
    AttandanceReportComponent,
    RegistrationReportComponent,
    UserTypeComponent,
    PositionComponent,
    WorkComponent,
    FestivalComponent,
    DaysComponent,
    ZoneComponent,
    DaysListComponent,
    FestivalListComponent,
    PositionListComponent,
    UserTypeListComponent,
    WorkListComponent,
    ZoneListComponent,
    DepartmentListComponent,
    AddRoleComponent,
    ViewAttandanceComponent,
    VolunteerRegistrationReportsComponent,
    AddUserListComponent,
    VolunteerRegistrationListComponent,
    AddRoleListComponent
  ]
})
export class CustomerModule {
}
