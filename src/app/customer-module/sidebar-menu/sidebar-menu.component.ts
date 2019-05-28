import {Component, OnInit} from '@angular/core';
import {RouteConstants} from '../../utility-module/constants/routes';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})

export class SidebarMenuComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit() {}
  
  get dashboardUrl() {
    return '/' + RouteConstants.DASHBOARD;
  }
  
  get addUserListUrl() {
    return '/' + RouteConstants.ADD_USER_LIST;
  }
  
  get addRoleUrl() {
    return '/' + RouteConstants.ADD_ROLE_LIST;
  }
  
  get volunteerRegUrl() {
    return '/' + RouteConstants.VOLUNTEER_REGISTRATION_LIST;
  }
  
  get deptListUrl() {
    return '/' + RouteConstants.DEPT_LIST;
  }
  
  get attandanceReportUrl() {
    return '/' + RouteConstants.ATTANDANCE_REPORTS;
  }
  
  get registrationReportUrl() {
    return '/' + RouteConstants.REGISTRATION_REPORTS;
  }
  
  get zoneUrl() {
    return '/' + RouteConstants.ZONE_LIST;
  }
  
  get positionUrl() {
    return '/' + RouteConstants.POSITION_LIST;
  }
  
  get workUrl() {
    return '/' + RouteConstants.WORK_LIST;
  }
  
  get festivalUrl() {
    return '/' + RouteConstants.FESTIVAL_LIST;
  }
  
  get daysUrl() {
    return '/' + RouteConstants.DAYS_LIST;
  }
  
  get userTypeUrl() {
    return '/' + RouteConstants.USER_TYPE_LIST;
  }
  
  get addDeptUrl() {
    return '/' + RouteConstants.DEPT_LIST;
  }
}


