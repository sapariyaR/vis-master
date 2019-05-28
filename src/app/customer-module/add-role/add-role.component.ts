import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../utility-module/constants/routes';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  AddRoleList(){
    this._router.navigate(['/' + RouteConstants.ADD_ROLE_LIST]);
  }
}
