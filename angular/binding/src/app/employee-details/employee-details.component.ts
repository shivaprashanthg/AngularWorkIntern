import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  template: `
  <h2>Employee details</h2>
  <ul *ngFor = "let employee of employees">
    <li>{{employee.id}}.{{employee.name}} - {{employee.age}} </li>
  </ul> 
  `,
  style: []
})
export class EmployeeDetailsComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService:EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errormsg = error);
  }

}
