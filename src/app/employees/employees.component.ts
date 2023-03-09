import { Employee } from './../Models/Employee';
import { EmployeeService } from './../Services/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  //injecting service dependency
  constructor(private httpservice:EmployeeService){}

  //creating objects 
  employees:Employee[]=[];
  id?:number;

  //calling get employee functionality
  getAllEmployees(){
    this.httpservice.getAllEmployees()
    .subscribe({next:
      (employees) => {
        this.employees=employees;
        console.log(employees);
        },error:
      (errorResponse)=> {
        console.log(errorResponse);
      }});}

  //calling delete employee functionality
  deleteEmployee(id:number){
    this.httpservice.deleteEmployee(id)
    .subscribe({next:
      ()=>{
        this.getAllEmployees;
      },error:
      (errorResponse)=>{
        console.log(errorResponse);
      }});}

  ngOnInit(): void {
    this.getAllEmployees();

    }
  }    



