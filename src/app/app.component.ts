// app.component.ts

import { Component } from '@angular/core';

// FormBuilder to create form and Validators for validations
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private fb: FormBuilder) {}

  userForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', Validators.required],
    phoneNo: ['', Validators.required],
    password: [''],
    confirmPassword: [''],
  });

  addUser() {
    console.log(this.userForm.value);
    this.userForm.reset();
  }
}
