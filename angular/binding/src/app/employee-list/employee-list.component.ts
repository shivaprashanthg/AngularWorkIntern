import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  template : `
    <h2>Employee list</h2>
    <h3>{{error msg}} </h3>
    <ul *ngFor = "let employee of employees">
      <li>{{employee.name}}</li>
    </ul>   
    `,
  style: []
})
export class EmployeeListComponent implements OnInit {

  public employees = [];

  constructor(private _employeeService : EmployeeService ) { }

  ngOnInit() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                   error => this.errormsg = error);
  }

}
/*{"id":1, "name": "andrew", "age":22},
    {"id":2, "name": "brad", "age":28},
    {"id":3, "name": "chris", "age":26},
    {"id":4, "name": "eklin", "age":25}
    this.employees*/