import {AddRoleListComponent} from '../../customer-module/add-role-list/add-role-list.component';

export class RouteConstants {
  public static CUSTOMER = 'customer';
  public static LOGIN_ROUTE = 'login';
  public static FORGOT_PASSWORD_ROUTE = 'forgot-password';
  public static RESET_PASSWORD_ROUTE = 'reset-password';
  public static DASHBOARD_ROUTE = 'dashboard';
  public static ADD_USER_ROUTE = 'add-user';
  public static ADD_USER_ROUTE_LIST = 'add-user-list';
  public static ADD_ROLE_ROUTE = 'add-role';
  public static ADD_ROLE_ROUTE_LIST = 'add-role-list';
  public static VOLUNTEER_REGISTER_ROUTE = 'volunteer-registration';
  public static REPORTS_ROUTE = 'reports';
  public static REGISTRATION_REPORTS_ROUTE = 'registration-reports';
  public static ATTANDANCE_REPORTS_ROUTE = 'attandance-reports';
  
  public static ADD = 'add';
  public static LIST = 'list';
  
  
 
  
  public static DEPT_LIST_ROUTE = 'dept';
  public static DAYS_LIST_ROUTE = 'days';
  public static FESTIVAL_LIST_ROUTE = 'festival';
  public static VIEW_ATTANDANCE_ROUTE = 'view-attendance';
  public static VOLUNTEER_REGISTER_REPORT_ROUTE = 'volunteer-register-view';
  public static ADD_VOLUNTEER_REGISTRATION_LIST = 'volunteer-register-list';
  public static POSITION_LIST_ROUTE = 'position';
  public static WORK_LIST_ROUTE = 'work';
  public static USER_TYPE_LIST_ROUTE = 'user-type';
  public static ZONE_LIST_ROUTE = 'zone';
  
  /**
   * Masters Root
   */
  public static DEPT_MASTER_ROUTE = `${RouteConstants.DEPT_LIST_ROUTE}/${RouteConstants.ADD}`;
  public static DAYS_MASTER_ROUTE = `${RouteConstants.DAYS_LIST_ROUTE}/${RouteConstants.ADD}`;
  public static FESTIVAL_MASTER_ROUTE = `${RouteConstants.FESTIVAL_LIST_ROUTE}/${RouteConstants.ADD}`;
  public static POSITION_MASTER_ROUTE = `${RouteConstants.POSITION_LIST_ROUTE}/${RouteConstants.ADD}`;
  public static WORK_MASTER_ROUTE = `${RouteConstants.WORK_LIST_ROUTE}/${RouteConstants.ADD}`;
  public static USER_TYPE_MASTER_ROUTE = `${RouteConstants.USER_TYPE_LIST_ROUTE}/${RouteConstants.ADD}`;
  public static ZONE_MASTER_ROUTE = `${RouteConstants.ZONE_LIST_ROUTE}/${RouteConstants.ADD}`;
  
  public static DASHBOARD = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.DASHBOARD_ROUTE;
  public static ADD_USER = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.ADD_USER_ROUTE;
  public static ADD_USER_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.ADD_USER_ROUTE_LIST;
  public static ADD_ROLE = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.ADD_ROLE_ROUTE;
  public static ADD_ROLE_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.ADD_ROLE_ROUTE_LIST;
  public static VOLUNTEER_REGISTER = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.VOLUNTEER_REGISTER_ROUTE;
  public static VOLUNTEER_REGISTRATION_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.ADD_VOLUNTEER_REGISTRATION_LIST;
  public static REGISTRATION_REPORTS = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.REGISTRATION_REPORTS_ROUTE;
  public static ATTANDANCE_REPORTS = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.ATTANDANCE_REPORTS_ROUTE;
  
  public static DEPT_MASTER = `/${RouteConstants.CUSTOMER}/${RouteConstants.DEPT_MASTER_ROUTE}`;
  public static DAYS_MASTER = `/${RouteConstants.CUSTOMER}/${RouteConstants.DAYS_MASTER_ROUTE}`;
  public static POSITION_MASTER = `/${RouteConstants.CUSTOMER}/${RouteConstants.POSITION_MASTER_ROUTE}`;
  public static WORK_MASTER = `/${RouteConstants.CUSTOMER}/${RouteConstants.WORK_MASTER_ROUTE}`;
  public static USER_TYPE_MASTER = `/${RouteConstants.CUSTOMER}/${RouteConstants.USER_TYPE_MASTER_ROUTE}`;
  public static ZONE_MASTER = `/${RouteConstants.CUSTOMER}/${RouteConstants.ZONE_MASTER_ROUTE}`;
  public static FESTIVAL_MASTER = `/${RouteConstants.CUSTOMER}/${RouteConstants.FESTIVAL_MASTER_ROUTE}`;
  
  public static DEPT_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.DEPT_LIST_ROUTE;
  public static DAYS_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.DAYS_LIST_ROUTE;
  public static POSITION_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.POSITION_LIST_ROUTE;
  public static WORK_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.WORK_LIST_ROUTE;
  public static USER_TYPE_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.USER_TYPE_LIST_ROUTE;
  public static ZONE_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.ZONE_LIST_ROUTE;
  public static FESTIVAL_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.FESTIVAL_LIST_ROUTE;
  public static ATTENANCE_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.VIEW_ATTANDANCE_ROUTE;
  public static VOLUNTEER_LIST = '/' + RouteConstants.CUSTOMER + '/' + RouteConstants.VOLUNTEER_REGISTER_REPORT_ROUTE;
}
