import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRoleListComponent } from './add-role-list.component';

describe('AddRoleListComponent', () => {
  let component: AddRoleListComponent;
  let fixture: ComponentFixture<AddRoleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRoleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
