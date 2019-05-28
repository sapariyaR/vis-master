import {Injectable} from '@angular/core';
import {User} from '../shared-model/shared-user.model';
import {EncryptionFunctions} from '../shared-functions/encryption-functions';
import {BehaviorSubject} from 'rxjs';
import {Observable} from 'rxjs';
import {APPStorage} from '../constants/storage';

@Injectable({
    providedIn: 'root'
  }
)

export class SharedUserService {
  private userFlag: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  
  constructor() {
  }
  
  private _user: User;
  private _masterData: any;
  
  getUser(): User {
    if (!this._user) {
      this._user = EncryptionFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.USER));
    }
    return this._user;
  }
  
  setUser(value: User): void {
    localStorage.setItem(APPStorage.USER, EncryptionFunctions.ENCRYPT_OBJ(value));
    this._user = value;
  }
  
  /* Shared User detailChangeFlag for update status */
  
  setUserDetailCall(value: boolean): void {
    this.userFlag.next(value);
  }
  
  getUserDetailCall(): Observable<boolean> {
    return this.userFlag.asObservable();
  }
  
  getMasterData() {
    if (!this._masterData) {
      this._masterData = EncryptionFunctions.DECRYPT_OBJ(localStorage.getItem(APPStorage.MASTER_DATA));
    }
    return this._masterData;
  }
  
  setMasterData(value): void {
    localStorage.setItem(APPStorage.MASTER_DATA, EncryptionFunctions.ENCRYPT_OBJ(value));
    this._masterData = value;
  }
}
