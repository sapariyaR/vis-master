import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {
  
  constructor(private _router: Router) { }
  
  ngOnInit() {
  }
  
  positionList(){
    this._router.navigate(['/' + RouteConstants.POSITION_LIST]);
  }
}
