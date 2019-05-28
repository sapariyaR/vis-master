import {Injectable} from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from '@angular/common/http';
import {SharedService} from '../shared-service/shared.service';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {HttpStatus, ToastStatus} from '../constants/base-constants';

@Injectable()
export class JWTInterceptor implements HttpInterceptor {
  constructor(private _sharedService: SharedService) {
  }
  
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwtReq = request.clone();
    // Pass on the cloned request instead of the original request.
    return next.handle(jwtReq).pipe(
      tap((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          const accessToken = event.headers.get('X-Auth');
          if (accessToken) {
            this._sharedService.setToken(accessToken);
          }
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          let message = 'Could not process the request. Please try again.';
          if (err.error && err.error['errorMessages'] && err.error['errorMessages'].length > 0) {
            this._sharedService.setToastMessage(err.error['errorMessages'], ToastStatus.MULTIPLE);
          } else if (err.status !== HttpStatus.EXPIRED) {
            message = err.error['message'] ? err.error['message'] : message;
            this._sharedService.setToastMessage(message, ToastStatus.ERROR);
          }
          if (err.status === HttpStatus.UNAUTHORIZED) {
            this._sharedService.logout();
          }
        }
      })
    );
  }
}
