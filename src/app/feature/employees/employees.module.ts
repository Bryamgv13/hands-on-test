import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './components/employee/employees.component';
import { EmployeesRoutingModule } from './employees.routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListEmployeesComponent } from './components/list-employees/list-employees.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    EmployeesRoutingModule
  ],
  declarations: [EmployeesComponent, ListEmployeesComponent]
})
export class EmployeesModule { }
