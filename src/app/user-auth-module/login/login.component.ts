import {Component, OnInit} from '@angular/core';
import {BaseComponent} from '../../utility-module/shared-component/base/base.component';
import {CommonRegexp, ValidationConstant} from '../../utility-module/constants/validations';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {RouteConstants} from '../../utility-module/constants/routes';
import {VolunteerService} from '../../customer-module/volunteer-registration/volunteer.service';
import {SharedService} from '../../utility-module/shared-service/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [VolunteerService]
})

export class LoginComponent extends BaseComponent implements OnInit {
  
  // Constant Variables
  validationMsg = new ValidationConstant();
  
  loginForm: FormGroup;
  
  hidePassword = true;
  
  constructor(private _fb: FormBuilder, private _router: Router, private _volunteerService: VolunteerService, private _sharedServices: SharedService) {
    super();
  }
  
  get forgotPasswordUrl() {
    return ['/' + RouteConstants.FORGOT_PASSWORD_ROUTE];
  }
  
  ngOnInit() {
    this.createLoginForm();
    this.getMasterData();
  }
  
  createLoginForm() {
    this.loginForm = this._fb.group({
      username: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(50), Validators.pattern(CommonRegexp.ALPHA_NUMERIC_REGEXP)]]
    });
  }
  
  onSubmit(form: FormGroup) {
   // console.log('submit event');
    if (form.valid) {
    //  console.log('Form Value :=>', form.value);
      this._router.navigate(['/' + RouteConstants.DASHBOARD]);
    }
  }
  
  getMasterData() {
    this._volunteerService.getMasterDataList().subscribe(response => {
      // console.log('Master Data', response);
      this._sharedServices.setMasterData(response);
    });
  }
}


