import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee-model';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.less']
})
export class EmployeeDetailsComponent implements OnInit {

  employee: Employee;

  constructor(private _route: ActivatedRoute, private _employeeService: EmployeeService) { }

  //Life cycle hooks
  //+ is used to convert string to number
  ngOnInit() {
    const id = +this._route.snapshot.params['id'];
    this.employee =  this._employeeService.getEmployee(id);
  }

}
