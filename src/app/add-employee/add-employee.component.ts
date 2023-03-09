import { Employee } from './../Models/Employee';
import { Location } from '@angular/common';
import { EmployeeService } from './../Services/employee.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  //injected employee service dependency
  constructor(private httpservice:EmployeeService, private location:Location){}

  //created an object to store employee details
  employee: Employee = {
    id: 0,
    name: '',
    address:'',
    phone:'',
    country:''
  };

  //go back functionality to have navigation capabilities
  goBack():void{
    this.location.back();
  }

  //calling add employee service
  addEmployee(employee:Employee){
    this.httpservice.addEmployees(employee)
    .subscribe(
      {next:()=>
        {
          this.goBack()
        },error:
        (errorResponse)=>{
          console.log(errorResponse);
        }});}

}
