import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee-model';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[];
  selectedEmployee: Employee;
  searchTerm: string;

  constructor(private _employeeService: EmployeeService,
    private _router: Router) {
  }

  /**Life Cycle Hook */
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
  }

  onClick(employeeId: number) {
    this._router.navigate(["/employees", employeeId])
  }

}
