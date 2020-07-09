import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Employee } from '../model/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService {

  constructor(protected http: HttpClient) { super(http); }

  public getEmployees(id: string) {
    const endPoint = `${environment.api}Employees/${id}`;
    return this.doGet<Array<Employee>>(endPoint,
      this.optsName('Get employees'));
  }

}
