// import { HttpClientModule} from '@angular/common/';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  //giving base url at which the service http will be called
  baseUrl: string = "http://localhost:3000/";

  //craeting services for crud operations

  getAllEmployees(): Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseUrl + `employees`);
  }

  getEmployeeById(id:number):Observable<any>{
    return this.http.get<any>(this.baseUrl +`employees/${id}`);
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete<any>(this.baseUrl + `employees/${id}`);
  }

  addEmployees(employee:Employee):Observable<any>{
    return this.http.post<any>(this.baseUrl + `employees`,employee);
  }

  editEmployee(employee:Employee):Observable<any>{
    return this.http.put<any>(this.baseUrl + `employees/${employee.id}`,employee);
  } 
}
