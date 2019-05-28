import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../utility-module/constants/routes';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  constructor(private _router: Router) { }

  ngOnInit() {

  }
  AddUserList(){
    this._router.navigate(['/' + RouteConstants.ADD_USER_LIST]);
  }
}


