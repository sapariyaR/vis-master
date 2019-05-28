import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-forgot-otp',
  templateUrl: './forgot-otp.component.html',
  styleUrls: ['./forgot-otp.component.scss']
})
export class ForgotOtpComponent implements OnInit {
  @Output() onClick: EventEmitter<string> = new EventEmitter();
  
  constructor(private _router: Router) { }
  
  ngOnInit() {
  }
  
  /**
   * @param form
   */
  onSubmitOtpForm = () => {
    // stop here if form is invalid
    this.onClick.emit('new-password');
  };
  
  goToForgotEmail(){
    this.onClick.emit('forgot-email');
  }
}
