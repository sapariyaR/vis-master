import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-zone',
  templateUrl: './zone.component.html',
  styleUrls: ['./zone.component.scss']
})
export class ZoneComponent implements OnInit {
  
  constructor(private _router: Router) { }
  
  ngOnInit() {
  }
  
  zoneList(){
    this._router.navigate(['/' + RouteConstants.ZONE_LIST]);
  }

}
