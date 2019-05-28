import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {RouteConstants} from '../../utility-module/constants/routes';
import {VolunteerService} from './volunteer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {BaseComponent} from '../../utility-module/shared-component/base/base.component';
import {CommonRegexp, ValidationConstant} from '../../utility-module/constants/validations';
import {ToastrService} from 'ngx-toastr';
import {SharedService} from '../../utility-module/shared-service/shared.service';
import {KShetraModel, MandalModel} from '../../utility-module/shared-model/master-data.model';
import {ToastStatus} from '../../utility-module/constants/base-constants';


@Component({
  selector: 'app-volunteer-registration',
  templateUrl: './volunteer-registration.component.html',
  styleUrls: ['./volunteer-registration.component.scss'],
  providers: [VolunteerService]
})

export class VolunteerRegistrationComponent extends BaseComponent implements OnInit {
  
  validationMsg = new ValidationConstant();
  
  // Form Variables
  registerForm: FormGroup;
  
  // Data variables
  kshetraList: KShetraModel;
  mandalList: MandalModel;
  mandalSendId;
  
  constructor(
    private _sharedServices: SharedService,
    private _router: Router,
    private _volunteerService: VolunteerService,
    private _fb: FormBuilder) {
    super();
  }
  
  ngOnInit() {
    this.createForm();
    const masterDataList = this._sharedServices.getMasterData();
    this.kshetraList = masterDataList['kshetra'];
    this.mandalList = masterDataList['mandal'];
   // console.log('Kshetra List: ', this.kshetraList);
   // console.log('Mandal List: ', this.mandalList);
  }
  
  createForm() {
    this.registerForm = this._fb.group({
      name: ['', [<any>Validators.required]],
      mandalId: ['', [<any>Validators.required, <any>Validators.pattern(CommonRegexp.NUMERIC_REGEXP)]],
      mandalName: [''],
      kshetraName: [''],
      age: ['', [<any>Validators.required, <any>Validators.pattern(CommonRegexp.NUMERIC_REGEXP)]],
      mobile: ['', [<any>Validators.required, <any>Validators.pattern(CommonRegexp.NUMERIC_REGEXP)]],
      sevaDays: ['', [<any>Validators.required]],
      satsangPost: ['', [<any>Validators.required, <any>Validators.pattern(CommonRegexp.NUMERIC_REGEXP)]],
      otherSkill: ['', [<any>Validators.required]],
      computerSkill: ['', [<any>Validators.required]],
      formId: ['', [<any>Validators.required, <any>Validators.pattern(CommonRegexp.NUMERIC_REGEXP)]],
      specialSkills: ['', [<any>Validators.required, <any>Validators.pattern(CommonRegexp.COMMA_REGEXP)]],
      alternateContact: ['', [<any>Validators.pattern(CommonRegexp.NUMERIC_REGEXP)]]
    });
  }
  
  onSubmitRegisterForm(form: FormGroup) {
    if (form.valid) {
      form.value['mandalId'] = this.mandalSendId;
      this._volunteerService.postRegisterForm(form.value).subscribe(response => {
      //  console.log('form submitted', response);
        this._sharedServices.setToastMessage('Register form ' + response.userId + ' is successfully submitted', ToastStatus.SUCCESS);
        this.createForm();
      }, error1 => {
        // console.log(error1.message);
        this._sharedServices.setToastMessage('Register form faild', ToastStatus.ERROR);
      });
    }
  }
  
  volunteerRegistrationList() {
    this._router.navigate(['/' + RouteConstants.VOLUNTEER_REGISTRATION_LIST]);
  }
  
  onBlurMandalId(mandalId) {
    const mandalName = this.mandalList[`${mandalId}`] ? this.mandalList[`${mandalId}`]['name'] : null;
    this.mandalSendId = this.mandalList[`${mandalId}`] ? this.mandalList[`${mandalId}`]['id'] : null;
    const kshetraId = this.mandalList[`${mandalId}`] ? this.mandalList[`${mandalId}`]['kshetraId'] : null;
    const kshetraName = this.kshetraList[`${kshetraId}`] ? this.kshetraList[`${kshetraId}`]['name'] : null;
    this.registerForm.get('mandalName').setValue(mandalName);
    this.registerForm.get('kshetraName').setValue(kshetraName);
  }
}
