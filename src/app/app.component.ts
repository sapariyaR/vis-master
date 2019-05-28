import {Component, OnDestroy, OnInit} from '@angular/core';
import {ToastrService} from 'ngx-toastr';
import {SharedService} from './utility-module/shared-service/shared.service';
import {individualToastConfig, ToastStatus} from './utility-module/constants/base-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  toastSubscriber$: any;
  
  constructor(private toastr: ToastrService, private _sharedService: SharedService) {}
  
  ngOnInit() {
    this.configureToastManager();
  }
  
  configureToastManager() {
    const individualConfig = {};
    this.toastSubscriber$ = this._sharedService.getToastMessage().subscribe(msgBody => {
      if (msgBody) {
        if (msgBody.type === ToastStatus.SUCCESS) {
          setTimeout(() => this.toastr.success(msgBody.message, msgBody.title, individualToastConfig));
        } else if (msgBody.type === ToastStatus.ERROR) {
          setTimeout(() => this.toastr.error(msgBody.message, msgBody.title, individualToastConfig));
        }
        this._sharedService.setToastMessage('', ToastStatus.UNKNOWN);
      }
    });
  }
  
  ngOnDestroy() {
    if (this.toastSubscriber$) {
      this.toastSubscriber$.unsubscribe();
    }
  }
}
