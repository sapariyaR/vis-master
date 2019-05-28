import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VolunteerRegistrationListComponent } from './volunteer-registration-list.component';

describe('VolunteerRegistrationListComponent', () => {
  let component: VolunteerRegistrationListComponent;
  let fixture: ComponentFixture<VolunteerRegistrationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VolunteerRegistrationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VolunteerRegistrationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
