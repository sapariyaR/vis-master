import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../utility-module/constants/routes';
import {MatSort, MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-add-user-list',
  templateUrl: './add-user-list.component.html',
  styleUrls: ['./add-user-list.component.scss']
})

export class AddUserListComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'role', 'zone' , 'mobileno' , 'symbol'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  AddUser() {
    this._router.navigate(['/' + RouteConstants.ADD_USER]);
  }
}
export interface PeriodicElement {
  no: number;
  name: string;
  role: string;
  zone: number;
  mobileno : number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no:1 , name: 'Smart Sense', role: 'Carpainter', zone: 1, mobileno: 9898343421 , symbol: 'H'},
  { no:2 , name: 'Smart Sense', role: 'Plumber', zone: 1, mobileno: 8854314433 , symbol: 'H'},
  { no:3 , name: 'Smart Sense', role: 'Electrician', zone: 1, mobileno: 9977554312 , symbol: 'H'},
  { no:4 , name: 'Smart Sense', role: 'Engineer', zone: 1, mobileno: 7867321256 , symbol: 'H'},


];
