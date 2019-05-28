import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-festival',
  templateUrl: './festival.component.html',
  styleUrls: ['./festival.component.scss']
})
export class FestivalComponent implements OnInit {
  
  constructor(private _router: Router) { }
  
  ngOnInit() {
  }
  
  festivalList(){
    this._router.navigate(['/' + RouteConstants.FESTIVAL_LIST]);
  }
}
