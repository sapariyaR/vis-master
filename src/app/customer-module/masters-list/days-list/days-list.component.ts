import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {Router} from '@angular/router';
import {RouteConstants} from '../../../utility-module/constants/routes';

@Component({
  selector: 'app-days-list',
  templateUrl: './days-list.component.html',
  styleUrls: ['./days-list.component.scss']
})
export class DaysListComponent implements OnInit {
  
  displayedColumns: string[] = ['position', 'name', 'startDate','endDate', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  @ViewChild(MatSort) sort: MatSort;
  
  constructor(private _router:Router) { }
  
  ngOnInit() {
    this.dataSource.sort = this.sort;
  }
  
  addDays(){
    this._router.navigate(['/' + RouteConstants.DAYS_MASTER]);
  }
}


export interface PeriodicElement {
  name: string;
  position: number;
  startDate: string;
  endDate: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', startDate: '12-05-2018', endDate: '12-10-2018', symbol: 'H'},
  {position: 2, name: 'Helium', startDate: '12-05-2018', endDate: '12-10-2018', symbol: 'He'},
  {position: 3, name: 'Lithium', startDate: '12-05-2018', endDate: '12-10-2018', symbol: 'Li'},
  {position: 4, name: 'Beryllium', startDate: '12-05-2018', endDate: '12-10-2018', symbol: 'Be'},
  {position: 5, name: 'Boron', startDate: '12-05-2018', endDate: '12-10-2018', symbol: 'B'},
];
