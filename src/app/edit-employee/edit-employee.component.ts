import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Models/Employee';
import { EmployeeService } from '../Services/employee.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent {

  //injecting employee service dependency
  constructor(private employeeService: EmployeeService, private location: Location, private route: ActivatedRoute) {}

  //creating object of the model
  employee: Employee = {
    id: 0,
    name: '',
    address:'',
    phone:'',
    country:''
  };

  //navigation functionality
  goBack(): void {
    this.location.back();
  }

  //calling edit employee
  editEmployee(employee: Employee): void {
    this.employeeService.editEmployee(employee)
    .subscribe(
      {next:() => 
        {this.goBack()
        },error:
        (errorResponse)=>{
          console.log(errorResponse);
        }});}

        //getting by id to call it in the edit employee which will fetch the employee by id
  getEmployeeById(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.employeeService.getEmployeeById(id)
    .subscribe(
      {next:employee => 
      {
      this.employee.id = employee.id,
      this.employee.name = employee.name,
      this.employee.address=employee.address,
      this.employee.phone=employee.phone,
      this.employee.country=employee.country
    },error:
    (errorResponse)=>{
      console.log(errorResponse);
    }});}


  ngOnInit(): void {
    this.getEmployeeById();
  }

}
