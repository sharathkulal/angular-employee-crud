import { PipeTransform, Pipe } from '@angular/core';
import { Employee } from '../models/employee-model';

@Pipe({
    name: 'employeeFilter'
})
export class EmployeeFilterPipe implements PipeTransform {

    transform(employees: Employee[], searchTerm:string): Employee[] {
        if(!employees || !searchTerm) {
            //if employees is not truthy or searchTerm is not truthy, return original list of employees
            return employees;
        }

        return employees.filter(employee => 
            employee.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
        );
    }
    
}