import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {SharedUserService} from './shared-user.service';
import {APPStorage} from '../constants/storage';
import {ToastStatus} from '../constants/base-constants';
import {User} from '../shared-model/shared-user.model';
import {EncryptionFunctions} from '../shared-functions/encryption-functions';
import {RouteConstants} from '../constants/routes';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
    providedIn: 'root'
  }
)
export class SharedService extends SharedUserService {
  jwtHelperService: JwtHelperService = new JwtHelperService();
  private taskCount = 0;
  private _token = '';
  private msgBody: BehaviorSubject<any> = new BehaviorSubject<any>(null);
  private isLoginRequired: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor(private router: Router) {
    super();
  }
  
  /* Shared Loader Param */
  private isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  getLoader(): Observable<boolean> {
    return this.isLoading.asObservable();
  }
  
  setToken(value: string): void {
    localStorage.setItem(APPStorage.TOKEN, EncryptionFunctions.ENCRYPT_OBJ(value));
    this._token = value;
  }
  
  getToken(): string {
    this._token = EncryptionFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.TOKEN));
    return this._token;
  }
  
  IsValidToken(token: string): boolean {
    let isValid = true;
    try {
      const isTokenExpired = this.jwtHelperService.isTokenExpired(this.getToken());
      if (isTokenExpired) {
        isValid = false;
        this.setToastMessage('Your session has been expired. Please Login again.', ToastStatus.ERROR);
        this.clearSession();
      }
    } catch (e) {
      isValid = false;
    }
    return isValid;
  }
  
  /* Shared User Token Param */
  isLoggedIn(): boolean {
    return this.IsValidToken(this.getToken()) && this.isValidUser(this.getUser());
  }
  
  isValidUser(user: User): boolean {
    return (user) ? true : false;
  }
  
  setLoader(val: boolean): void {
    if (val) {
      this.taskCount += 1;
    } else {
      this.taskCount -= 1;
      if (this.taskCount !== 0) {
        val = true;
      }
    }
    this.isLoading.next(val);
  }
  
  
  getToastMessage(): Observable<any> {
    return this.msgBody.asObservable();
  }
  
  clearSession() {
    this.setToken(null);
    this.setUser(null);
    this.setLoginRequired(false);
    localStorage.clear();
  }
  
  logout(): void {
    this.clearSession();
    this.router.navigate(['/' + RouteConstants.LOGIN_ROUTE]);
  }
  
  /* setting route */
  setToastMessage(message: any, type: ToastStatus) {
    let body = null;
    if (message) {
      body = {
        message: message,
        type: type
      };
    }
    this.msgBody.next(body);
  }
  
  /* Shared LoggedIn Param */
  
  getLoginRequired(): Observable<boolean> {
    return this.isLoginRequired.asObservable();
  }
  
  setLoginRequired(val: boolean): void {
    this.isLoginRequired.next(val);
  }
  
} 
