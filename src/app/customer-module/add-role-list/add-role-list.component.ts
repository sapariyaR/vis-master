import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';
import {RouteConstants} from '../../utility-module/constants/routes';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-role-list',
  templateUrl: './add-role-list.component.html',
  styleUrls: ['./add-role-list.component.scss']
})
export class AddRoleListComponent implements OnInit {
  displayedColumns: string[] = ['no', 'name', 'role',  'symbol'];

  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  AddRole() {
    this._router.navigate(['/' + RouteConstants.ADD_ROLE]);
  }
}
export interface PeriodicElement {
  no: number;
  name: string;
  role: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { no: 1 , name: 'Smart Sense', role: 'Carpainter', symbol: 'H'},
  { no: 2 , name: 'Smart Sense', role: 'Plumber', symbol: 'H'},
  { no: 3 , name: 'Smart Sense', role: 'Electrician' , symbol: 'H'},
  { no: 4 , name: 'Smart Sense', role: 'Engineer', symbol: 'H'},


];
