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
  filteredEmployees: Employee[];
  selectedEmployee: Employee;
  private _searchTerm: string;

  constructor(private _employeeService: EmployeeService,
    private _router: Router) {
  }

  /**Life Cycle Hook */
  ngOnInit() {
    this.employees = this._employeeService.getEmployees();
    this.filteredEmployees = this.employees;
  }

  get searchTerm(): string {
    return this._searchTerm;
  }

  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee => 
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1
  );
  }

  onClick(employeeId: number) {
    this._router.navigate(["/employees", employeeId])
  }

}
