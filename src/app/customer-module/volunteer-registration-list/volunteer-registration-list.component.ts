import {Component, OnInit, ViewChild} from '@angular/core';
import {RouteConstants} from '../../utility-module/constants/routes';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {VolunteerService} from '../volunteer-registration/volunteer.service';

@Component({
  selector: 'app-volunteer-registration-list',
  templateUrl: './volunteer-registration-list.component.html',
  styleUrls: ['./volunteer-registration-list.component.scss'],
  providers: [VolunteerService]
})
export class VolunteerRegistrationListComponent implements OnInit {
  
  displayedColumns: string[] = ['srno', 'name' , 'mandalregno', 'mandalregname', 'kshetra', ];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router, private _volunteerService: VolunteerService) {}

  ngOnInit() {
    this.getList();
  }

  VolunteerRegistration() {
    this._router.navigate(['/' + RouteConstants.VOLUNTEER_REGISTER]);
  }
  
  getList() {
    this._volunteerService.getVolunteerList().subscribe(response => {
     // console.log(response);
    });
  }
}
export interface PeriodicElement {
  srno : number;
  name: string;
  mandalregno: number;
  mandalregname: string;
  kshetra: string;

}

const ELEMENT_DATA: PeriodicElement[] = [
  { srno: 1 , name: 'smart' , mandalregno: 1 , mandalregname: 'Smart Sense', kshetra: 'ABC', },
  {srno: 1 , name: 'smart', mandalregno: 2 , mandalregname: 'Smart Sense', kshetra: 'ABC', },
  { srno: 1 , name: 'smart', mandalregno: 3 , mandalregname: 'Smart Sense', kshetra: 'ABC',  },
  { srno: 1 , name: 'smart', mandalregno: 4 , mandalregname: 'Smart Sense', kshetra: 'ABC',  },
];
