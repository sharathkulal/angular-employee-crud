import { Injectable } from '@angular/core';
import { Employee } from './models/employee-model';

@Injectable()
export class EmployeeService {

    private listEmployees: Employee[] = [
        {
            id: 1,
            name: 'Employee1',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'emp1@comp.com',
            dateOfBirth: new Date('10/12/1970'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/emp1.png'
          },
          {
            id: 2,
            name: 'Employee2',
            gender: 'Male',
            contactPreference: 'Email',
            email: 'emp2@comp.com',
            dateOfBirth: new Date('10/12/1970'),
            department: '4',
            isActive: true,
            photoPath: 'assets/images/emp2.png'
          },
          {
            id: 3,
            name: 'Employee3',
            gender: 'female',
            contactPreference: 'Email',
            email: 'emp3@comp.com',
            dateOfBirth: new Date('10/12/1970'),
            department: '2',
            isActive: true,
            photoPath: 'assets/images/emp3.png'
          }
    ];

    constructor() {
    }

    getEmployees(): Employee[] {
        return this.listEmployees;
    }

    getEmployee(id: number): Employee {
      return this.listEmployees.find(e => e.id === id);
    }

    save(employee: Employee) {
        this.listEmployees.push(employee);
    }

}