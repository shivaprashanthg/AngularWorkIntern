import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Employee2ListComponent } from './employee2-list.component';

describe('Employee2ListComponent', () => {
  let component: Employee2ListComponent;
  let fixture: ComponentFixture<Employee2ListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Employee2ListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Employee2ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
