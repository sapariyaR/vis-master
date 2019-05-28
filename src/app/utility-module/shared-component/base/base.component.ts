import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
})
export class BaseComponent implements OnInit {
  
  constructor() {}
  
  ngOnInit() {}
  
  // Form Validation Methods
  isRequiredField(formControlName) {
    return formControlName.hasError('required') && formControlName.touched;
  }
  
  isRequiredTimePickerField(formControlName) {
    return formControlName.hasError('required') && formControlName.untouched;
  }
  
  isValidField(formControlName) {
    return formControlName.hasError('pattern');
  }
  
  isValidLength(formControlName) {
    return formControlName.hasError('minlength') || formControlName.hasError('maxlength');
  }
  
  hasError(errorName, formGroup, formControl) {
    return formGroup.hasError(errorName) && formControl.dirty;
  }
}
