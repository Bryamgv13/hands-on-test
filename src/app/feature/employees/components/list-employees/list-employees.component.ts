import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.sass']
})
export class ListEmployeesComponent implements OnInit {
  @Input() listEmployees: Array<Employee>;

  constructor() { }

  ngOnInit() {
  }

}
