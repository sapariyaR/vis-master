import { Component, OnInit } from '@angular/core';


export enum Views {
  FORGOT_EMAIL, OTP, NEW_PASSWORD
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  
  
  // Contant Variables
  enumView = Views;
  activeView: Views = this.enumView.FORGOT_EMAIL;
  
  constructor() {
  }
  
  ngOnInit() {
  }
  
  /**
   * Change Screen method
   * @param routeName
   */
  onChangeRoute(routeName) {
    switch (routeName) {
      case 'forgot-email':
        this.activeView = this.enumView.FORGOT_EMAIL;
        break;
      
      case 'otp':
        this.activeView = this.enumView.OTP;
        break;
      
      case 'new-password':
        this.activeView = this.enumView.NEW_PASSWORD;
        break;
    }
  }
  
  
}
