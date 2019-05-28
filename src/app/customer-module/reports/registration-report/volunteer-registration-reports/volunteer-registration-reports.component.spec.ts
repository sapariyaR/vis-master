import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerRegistrationReportsComponent } from './volunteer-registration-reports.component';

describe('VolunteerRegistrationReportsComponent', () => {
  let component: VolunteerRegistrationReportsComponent;
  let fixture: ComponentFixture<VolunteerRegistrationReportsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerRegistrationReportsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
