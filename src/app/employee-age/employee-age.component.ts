import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-age',
  templateUrl: './employee-age.component.html',
  styleUrls: ['./employee-age.component.css']
})
export class EmployeeAgeComponent implements OnInit {

  public employees: any[] =[];
 

  constructor(private _empSer: EmployeeService) { }

  ngOnInit(): void {
    this._empSer.getEmployees().subscribe(data => this.employees = data)
  }

}
