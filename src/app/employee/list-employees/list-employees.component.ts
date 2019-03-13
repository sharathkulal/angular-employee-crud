import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee-model';

@Component({
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.less']
})
export class ListEmployeesComponent implements OnInit {

  employees:Employee[] = [
    {
      id: 1,
      name: 'Provider',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'prov@prov.com',
      dateOfBirth: new Date('10/12/1970'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/emp1.png'
    },
    {
      id: 2,
      name: 'MessageCenter',
      gender: 'Male',
      contactPreference: 'Email',
      email: 'prov@prov.com',
      dateOfBirth: new Date('10/12/1970'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/emp2.png'
    },
    {
      id: 3,
      name: 'waiting',
      gender: 'female',
      contactPreference: 'Email',
      email: 'prov@prov.com',
      dateOfBirth: new Date('10/12/1970'),
      department: 'IT',
      isActive: true,
      photoPath: 'assets/images/emp3.png'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
