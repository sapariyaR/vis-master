import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RouteConstants} from '../utility-module/constants/routes';
import {HomeComponent} from './home/home.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {AddUserComponent} from './add-user/add-user.component';
import {VolunteerRegistrationComponent} from './volunteer-registration/volunteer-registration.component';
import {DepartmentMasterComponent} from './masters/department-master/department-master.component';
import {ReportsComponent} from './reports/reports.component';
import {AttandanceReportComponent} from './reports/attandance-report/attandance-report.component';
import {RegistrationReportComponent} from './reports/registration-report/registration-report.component';
import {UserTypeComponent} from './masters/user-type/user-type.component';
import {PositionComponent} from './masters/position/position.component';
import {WorkComponent} from './masters/work/work.component';
import {FestivalComponent} from './masters/festival/festival.component';
import {DaysComponent} from './masters/days/days.component';
import {ZoneComponent} from './masters/zone/zone.component';
import {DaysListComponent} from './masters-list/days-list/days-list.component';
import {FestivalListComponent} from './masters-list/festival-list/festival-list.component';
import {PositionListComponent} from './masters-list/position-list/position-list.component';
import {UserTypeListComponent} from './masters-list/user-type-list/user-type-list.component';
import {WorkListComponent} from './masters-list/work-list/work-list.component';
import {ZoneListComponent} from './masters-list/zone-list/zone-list.component';
import {DepartmentListComponent} from './masters-list/department-list/department-list.component';
import {AddRoleComponent} from './add-role/add-role.component';
import {ViewAttandanceComponent} from './reports/view-attandance/view-attandance.component';
import {VolunteerRegistrationReportsComponent} from './reports/registration-report/volunteer-registration-reports/volunteer-registration-reports.component';
import {AddUserListComponent} from './add-user-list/add-user-list.component';
import {VolunteerRegistrationListComponent} from './volunteer-registration-list/volunteer-registration-list.component';
import {AddRoleListComponent} from './add-role-list/add-role-list.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: RouteConstants.DASHBOARD_ROUTE,
        component: DashboardComponent
      },
      {
        path: RouteConstants.ADD_USER_ROUTE,
        component: AddUserComponent
      },
      {
        path: RouteConstants.ADD_ROLE_ROUTE,
        component: AddRoleComponent
      },
      {
        path: RouteConstants.VOLUNTEER_REGISTER_ROUTE,
        component: VolunteerRegistrationComponent
      },
      {
        path: RouteConstants.DEPT_MASTER_ROUTE,
        component: DepartmentMasterComponent
      },
      {
        path: RouteConstants.REPORTS_ROUTE,
        component: ReportsComponent
      },
      {
        path: RouteConstants.ATTANDANCE_REPORTS_ROUTE,
        component: AttandanceReportComponent
      },
      {
        path: RouteConstants.REGISTRATION_REPORTS_ROUTE,
        component: RegistrationReportComponent
      },
      {
        path: RouteConstants.USER_TYPE_MASTER_ROUTE,
        component: UserTypeComponent
      },
      {
        path: RouteConstants.POSITION_MASTER_ROUTE,
        component: PositionComponent
      },
      {
        path: RouteConstants.WORK_MASTER_ROUTE,
        component: WorkComponent
      },
      {
        path: RouteConstants.FESTIVAL_MASTER_ROUTE,
        component: FestivalComponent
      },
      {
        path: RouteConstants.DAYS_MASTER_ROUTE,
        component: DaysComponent
      },
      {
        path: RouteConstants.ZONE_MASTER_ROUTE,
        component: ZoneComponent
      },
      {
        path: RouteConstants.ZONE_LIST_ROUTE,
        component: ZoneListComponent
      },
      {
        path: RouteConstants.DAYS_LIST_ROUTE,
        component: DaysListComponent
      },
      {
        path: RouteConstants.POSITION_LIST_ROUTE,
        component: PositionListComponent
      },
      {
        path: RouteConstants.USER_TYPE_LIST_ROUTE,
        component: UserTypeListComponent
      },
      {
        path: RouteConstants.WORK_LIST_ROUTE,
        component: WorkListComponent
      },
      {
        path: RouteConstants.DEPT_LIST_ROUTE,
        component: DepartmentListComponent
      },
      {
        path: RouteConstants.FESTIVAL_LIST_ROUTE,
        component: FestivalListComponent
      },
      {
        path: RouteConstants.VIEW_ATTANDANCE_ROUTE,
        component: ViewAttandanceComponent
      },
      {
        path: RouteConstants.VOLUNTEER_REGISTER_REPORT_ROUTE,
        component: VolunteerRegistrationReportsComponent
      },
      {
        path: RouteConstants.ADD_USER_ROUTE_LIST,
        component:  AddUserListComponent
      },
      {
        path: RouteConstants.ADD_VOLUNTEER_REGISTRATION_LIST,
        component:  VolunteerRegistrationListComponent
      },
      {
        path: RouteConstants.ADD_ROLE_ROUTE_LIST,
        component:  AddRoleListComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
