import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAttandanceComponent } from './view-attandance.component';

describe('ViewAttandanceComponent', () => {
  let component: ViewAttandanceComponent;
  let fixture: ComponentFixture<ViewAttandanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAttandanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAttandanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
