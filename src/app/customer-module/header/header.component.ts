import {Component, OnInit} from '@angular/core';
import {RouteConstants} from '../../utility-module/constants/routes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private _router: Router) {
  }
  
  ngOnInit() {
  }
  
  onLogin() {
    this._router.navigate(['/' + RouteConstants.LOGIN_ROUTE]);
  }
}
