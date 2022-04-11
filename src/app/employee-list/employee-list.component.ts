import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  public employees: any[] = [];

  constructor(private _empser: EmployeeService) { }

  ngOnInit(): void {
    this._empser.getEmployees()
      .subscribe(data => this.employees = data);
  }

}
