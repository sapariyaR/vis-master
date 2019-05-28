import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.scss']
})
export class DaysComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  
  daysList(){
    this._router.navigate(['/' + RouteConstants.DAYS_LIST]);
  }

}

