import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {finalize, map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {SharedService} from './shared.service';
import {ToastStatus} from '../constants/base-constants';
import {isEmpty} from '../shared-functions/common-functions';

@Injectable({
  providedIn: 'root'
})
export class APIManager {
  constructor(private sharedService: SharedService, private http: HttpClient) {
  }
  
  getAPI(endPoint, params = {}, searchParams = {}, httpOptions: any = this.HttpOptions, showLoader: boolean = true, showToast: boolean = false): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.get(this.prepareEndpoint(endPoint, params, searchParams), httpOptions)
      .pipe(
        map(res => {
          return this.extractData(res, showToast);
        }, (error: any) => {
        }),
        finalize(() => {
          if (showLoader) {
            this.sharedService.setLoader(false);
          }
        })
      );
  }
  
  getImage(endPoint): Observable<any> {
    return this.http.get(endPoint, this.HttpOptions_4)
      .pipe(map(res => {
        return res;
      }), (error: any) => {
        return error;
      });
  }
  
  postAPI(endPoint, params = {}, httpOptions: any = this.HttpOptions,
          showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.post(endPoint, params, httpOptions).pipe(map((response: any) => {
          return this.extractData(response, showToast);
        }, (error: any) => {
        }),
        finalize(() => {
          if (showLoader) {
            this.sharedService.setLoader(false);
          }
        })
      );
  }
  
  putAPI(endPoint, params = {}, httpOptions: any = this.HttpOptions,
         showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.put(endPoint, params, httpOptions)
      .pipe(
        map((response: any) => {
          return this.extractData(response, showToast);
        }, (error: any) => {
        }),
        finalize(() => {
          if (showLoader) {
            this.sharedService.setLoader(false);
          }
        })
      );
  }
  
  /**
   * Performs a request with `put` http method.
   * */
  putMutliPartAPI(url: string, params: {}, filesObj: any, httpOptions: any = this.HttpOptions,
                  showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    const formData: FormData = new FormData();
    for (const obj of filesObj) {
      const imgFilesObj: File[] = obj['files'];
      for (let i = 0; i < imgFilesObj.length; i++) {
        formData.append(obj['reqKey'], imgFilesObj[i], imgFilesObj[i].name);
      }
    }
    if (params !== '' && params !== undefined && params !== null) {
      for (const property in params) {
        if (params.hasOwnProperty(property)) {
          formData.append(property, params[property]);
        }
      }
    }
    return this.http.put(url, formData, httpOptions)
      .pipe(
        map((response: any) => {
          return this.extractData(response, showToast);
        }, (error: any) => {
        }),
        finalize(() => {
          if (showLoader) {
            this.sharedService.setLoader(false);
          }
        })
      );
  }
  
  postMultipartAPI(endPoint, params = {}, filesObj: any, httpOptions: any = this.HttpOptions,
                   showLoader: boolean = true, showToast: boolean = true): Observable<any> {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    
    const formData: FormData = new FormData();
    for (const obj of filesObj) {
      const imgFilesObj: File[] = obj['files'];
      for (let i = 0; i < imgFilesObj.length; i++) {
        formData.append(obj['reqKey'], imgFilesObj[i], imgFilesObj[i].name);
      }
    }
    if (params && (Object.keys(params).length)) {
      for (const docKey in params) {
        formData.append(docKey, params[docKey]);
      }
    }
    return this.http.post(endPoint, formData, httpOptions)
      .pipe(
        map((response: any) => {
          return this.extractData(response, showToast);
        }, (error: any) => {
        }), finalize(() => {
          if (showLoader) {
            this.sharedService.setLoader(false);
          }
        }));
  }
  
  deleteAPI(endPoint, params = {}, httpOptions: any = this.HttpOptions,
            showLoader: boolean = true, showToast: boolean = true) {
    if (showLoader) {
      this.sharedService.setLoader(true);
    }
    return this.http.delete(this.prepareEndpoint(endPoint, params), httpOptions)
      .pipe(
        map((response: any) => {
          return this.extractData(response, showToast);
        }, (error: any) => {
        }),
        finalize(() => {
          if (showLoader) {
            this.sharedService.setLoader(false);
          }
        })
      );
  }
  
  get HttpOptions() {
    let httpOptions;
    const authToken = this.sharedService.getToken();
    if (this.sharedService.IsValidToken(authToken)) {
      httpOptions = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `${'Bearer ' + authToken}`
      });
    } else {
      httpOptions = this.HttpOptions_2;
    }
    return {headers: httpOptions};
  }
  
  
  get HttpOptions_1() {
    let httpOptions;
    const authToken = this.sharedService.getToken();
    httpOptions = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `${authToken}`
    });
    return {headers: httpOptions};
  }
  
  
  get HttpOptions_2() {
    let httpOptions;
    httpOptions = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return {headers: httpOptions};
  }
  
  
  get HttpOptions_3() {
    let httpOptions;
    const authToken = this.sharedService.getToken();
    httpOptions = new HttpHeaders({
      'Authorization': `${'Bearer ' + authToken}`
    });
    return {headers: httpOptions};
  }
  
  get HttpOptions_4(): any {
    return {
      headers: new HttpHeaders({
        'Authorization': `${'Bearer ' + this.sharedService.getToken()}`,
      }),
      responseType: 'blob'
    };
  }
  
  private prepareEndpoint(endPoint: string, params: any, searchParams = {}) {
    if (!isEmpty(searchParams)) {
      params['search'] = JSON.stringify(searchParams);
    }
    if (Object.keys(params).length) {
      let queryString = params ? '?' : '';
      let count = 0;
      for (const key in params) {
        if (params.hasOwnProperty(key)) {
          queryString += (count > 0) ? '&' + key + '=' + params[key] : key + '=' + params[key];
          count++;
        }
      }
      return endPoint + queryString;
    }
    return endPoint;
  }
  
  private extractData(res: any, show?: boolean) {
    const msg = res.message;
    if (show && msg) {
      this.sharedService.setToastMessage(msg, ToastStatus.SUCCESS);
    }
    return res || {};
  }
}
