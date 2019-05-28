import {Injectable} from '@angular/core';
import {API} from '../../utility-module/constants/api';
import {APIManager} from '../../utility-module/shared-service/apimanager.service';

@Injectable({
  providedIn: 'root'
})
export class VolunteerService {
  
  constructor(private _apiManager: APIManager) {
  }
  
  postRegisterForm(params) {
    return this._apiManager.postAPI(API.REGISTER_FORM, params, this._apiManager.HttpOptions_2, true, false);
  }
  
  getVolunteerList() {
    return this._apiManager.getAPI(API.USER, {}, {}, this._apiManager.HttpOptions_2, true, false);
  }
  
  getMasterDataList() {
    return this._apiManager.getAPI(API.MASTER_DATA, {}, {}, this._apiManager.HttpOptions_2, true, false);
  }
}
