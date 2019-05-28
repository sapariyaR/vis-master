import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.scss']
})
export class NewPasswordComponent implements OnInit {
  
  @Output() onClick: EventEmitter<string> = new EventEmitter();

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  /**
   * Form Submit Event
   * @param form
   */
  onSubmitNewPassswordForm = () => {
    this._router.navigate(['/' + RouteConstants.LOGIN_ROUTE]);
  };
  
  /**
   * Back to Email
   */
  onBackForgotEmail = () => {
    this.onClick.emit('otp');
  };

}
