import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Department} from '../create-employee/department.model';
import {BsDatepickerConfig} from 'ngx-bootstrap/datepicker';
import {Employee} from '../models/employee-model';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.less']
})
export class CreateEmployeeComponent implements OnInit {
  //gender = 'female';

  previewPhoto = false;

  datePickerConfig: Partial<BsDatepickerConfig>;

  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    contactPreference: null,
    phoneNumber: null,
    email: null,
    dateOfBirth: null,
    department: "-101",
    isActive: null,
    photoPath: null
  };

  departments : Department[] = [
    {id: 1, name: 'Help Desk'},
    {id: 2, name: 'HR'},
    {id: 3, name: 'IT'},
    {id: 4, name: 'Payroll'},
  ];

  constructor() {
    this.datePickerConfig = Object.assign({}, {
      containerClass: 'theme-dark-blue',
      showWeekNumbers: false,
      minDate: new Date(1920, 0, 1),
      maxDate: new Date(2000, 11, 31)
    });
   }

  ngOnInit() {
  }

  saveEmployee(employee: Employee): void {
    console.log(employee)
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
    //console.log("preview photo:"+this.previewPhoto);
  }
}
