import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {RouteConstants} from '../../../utility-module/constants/routes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-report',
  templateUrl: './registration-report.component.html',
  styleUrls: ['./registration-report.component.scss']
})
export class RegistrationReportComponent implements OnInit {
  displayedColumns: string[] = ['position', 'date',  'name',  'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onVolunteerRegistration(){
    this._router.navigate(['/' + RouteConstants.VOLUNTEER_LIST]);
  }
}

export interface PeriodicElement {
  date: string;
  name: string;
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '28/9/18',  name: 'Smart Sense' , },
  {position: 2, date: '28/9/18',  name: 'Smart Sense' ,},
  {position: 3, date: '28/9/18',  name: 'Smart Sense' , },
  {position: 4, date: '28/9/18',  name: 'Smart Sense' , },

];
