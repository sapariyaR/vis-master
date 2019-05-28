import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../../utility-module/constants/routes';

@Component({
  selector: 'app-volunteer-registration-reports',
  templateUrl: './volunteer-registration-reports.component.html',
  styleUrls: ['./volunteer-registration-reports.component.scss']
})
export class VolunteerRegistrationReportsComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  onRegistrationReport(){
    this._router.navigate(['/' + RouteConstants.REGISTRATION_REPORTS]);
  }
}
