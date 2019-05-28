import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-view-attandance',
  templateUrl: './view-attandance.component.html',
  styleUrls: ['./view-attandance.component.scss']
})

export class ViewAttandanceComponent implements OnInit {

  displayedColumns: string[] = ['position', 'date', 'name'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router) {
  }

  ngOnInit() {
  }
  onAttandanceReport(){
    this._router.navigate(['/' + RouteConstants.ATTANDANCE_REPORTS]);
  }
}

export interface PeriodicElement {
  position: number;
  date: string;
  name: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, date: '28/9/18', name: 'Smart Sense'},
  {position: 2, date: '28/9/18', name: 'Smart Sense'},
  {position: 3, date: '28/9/18', name: 'Smart Sense'}
];
