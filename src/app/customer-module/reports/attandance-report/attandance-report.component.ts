import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-attandance-report',
  templateUrl: './attandance-report.component.html',
  styleUrls: ['./attandance-report.component.scss']
})
export class AttandanceReportComponent implements OnInit {

  displayedColumns: string[] = ['position', 'date', 'festival', 'attandance',  'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  onViewAttendance(){
    this._router.navigate(['/' + RouteConstants.ATTENANCE_LIST]);
  }
}

export interface PeriodicElement {
  date: string;
  festival: string;
  attandance: string;
  position: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '28/9/18', festival: 'janm jayanti', attandance: '20.000' , symbol: 'He'},
  {position: 2, date: '28/9/18', festival: 'janm jayanti', attandance: '20.000' , symbol: 'He'},
  {position: 3, date: '28/9/18', festival: 'janm jayanti', attandance: '20.000' , symbol: 'Li'},
  {position: 4, date: '28/9/18', festival: 'janm jayanti', attandance: '20.000' , symbol: 'Be'},

];
