import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.sass']
})
export class EmployeesComponent implements OnInit {

  EmployeeForm: FormGroup;
  submitted = false;
  isFormValido = false;
  employees: Array<Employee>;
  showTable: boolean;

  constructor(private fb: FormBuilder,
              private employeesService: EmployeeService) { }

  ngOnInit() {
    this.showTable = false;
    this.EmployeeForm = this.fb.group({
      id: ['', Validators.pattern(/^-?(0|[1-9]\d*)?$/)]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.EmployeeForm.valid) {
      this.isFormValido = true;
      this.getEmployees();
    } else {
      this.isFormValido = false;
    }
  }

  private getEmployees() {
    const id = (this.EmployeeForm.controls.id.value) ? this.EmployeeForm.controls.id.value : 0;
    this.employeesService.getEmployees(id).subscribe(response => {
      this.employees = response;
      this.showTable = true;
    });
  }
}
