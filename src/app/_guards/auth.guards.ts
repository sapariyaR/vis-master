import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {SharedService} from '../utility-module/shared-service/shared.service';
import {RouteConstants} from '../utility-module/constants/routes';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private _sharedService: SharedService) {
  }
  
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let activateRoute = true;
    const readURL = state.url.split('?')[0];
    if (this._sharedService.isLoggedIn()) {
      activateRoute = true;
    } else {
      if (readURL === '/') {
        activateRoute = true;
      } else {
        this.router.navigate(['/' + RouteConstants.LOGIN_ROUTE]);
        activateRoute = false;
      }
    }
    return activateRoute;
  }
}
