import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { ListEmployeesComponent } from './employee/list-employees/list-employees.component';
import { CreateEmployeeCanDeactivateGuardService } from './employee/create-employee/create-employee-can-deactivate-guard.service';
import { EmployeeDetailsComponent } from './employee/employee-details/employee-details.component';

const routes: Routes = [
  { path: 'list', component: ListEmployeesComponent },
  { 
    path: 'create', 
    component: CreateEmployeeComponent,
    canDeactivate: [CreateEmployeeCanDeactivateGuardService] 
  },
  { path: 'employees/:id', component: EmployeeDetailsComponent },
  { path: '', redirectTo: '/list', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
