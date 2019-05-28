import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  userTypeList(){
    this._router.navigate(['/' + RouteConstants.USER_TYPE_LIST]);
  }
}
