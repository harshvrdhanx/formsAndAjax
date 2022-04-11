import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  formVar: FormGroup | any;
  constructor() { }
  //  private fb: FormBuilder
  ngOnInit(): void {
    // this.formVar = this.fb.group({
    //   id: ['', Validators.required],
    //   name: ['', Validators.required, Validators.minLength(5)],
    //   age: ['', Validators.required, Validators.min(18)]
    // });
  }

}
