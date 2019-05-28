import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {
  
  constructor(private _router: Router) { }
  
  ngOnInit() {
  }
  
  workList(){
    this._router.navigate(['/' + RouteConstants.WORK_LIST]);
  }

}
