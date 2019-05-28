import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-forgot-email',
  templateUrl: './forgot-email.component.html',
  styleUrls: ['./forgot-email.component.scss']
})
export class ForgotEmailComponent implements OnInit {
  
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  /**
   * @param form
   */
  onSubmitForgotEmailForm = () => {
    // stop here if form is invalid
    this.onClick.emit('otp');
  };
  
  goToLogin(){
    this._router.navigate(['/' + RouteConstants.LOGIN_ROUTE]);
  }

}
