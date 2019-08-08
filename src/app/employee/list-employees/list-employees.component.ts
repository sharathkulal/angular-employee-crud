import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee-model';
import { EmployeeService } from '../employee.service';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[];
  selectedEmployee: Employee;

  constructor(private _employeeService: EmployeeService) {
  }

  /**Life Cycle Hook */
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  handleNotify(eventData: Employee) {
    this.selectedEmployee = eventData;
  }
}
