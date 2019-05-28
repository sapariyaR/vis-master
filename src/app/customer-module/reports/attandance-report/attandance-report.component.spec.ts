import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttandanceReportComponent } from './attandance-report.component';

describe('AttandanceReportComponent', () => {
  let component: AttandanceReportComponent;
  let fixture: ComponentFixture<AttandanceReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttandanceReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttandanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
