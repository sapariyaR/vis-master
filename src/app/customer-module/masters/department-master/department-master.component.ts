import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-department-master',
  templateUrl: './department-master.component.html',
  styleUrls: ['./department-master.component.scss']
})
export class DepartmentMasterComponent implements OnInit {
  
  constructor(private _router: Router) { }
  
  ngOnInit() {
  }
  
  deptList(){
    this._router.navigate(['/' + RouteConstants.DEPT_LIST]);
  }

}
