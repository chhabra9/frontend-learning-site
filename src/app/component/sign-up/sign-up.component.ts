import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{
    signupForm!:FormGroup;
    hide!:boolean;
    passwordExp=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%&*])[A-Za-z\d@@$!%*?&]{8,}$/;
    user!:User;
    constructor(private fb:FormBuilder){
      this.hide = true
    }

    ngOnInit(): void {
      this.signupForm = this.fb.group({
        firstName: ['',[Validators.required]],
        lastName: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.pattern(this.passwordExp)]],
        address: this.fb.group({
          street: [''],
          city: [''],
          state: ['']
        })
      })
    }
    signupUser(){
      console.log("hello")
      this.user = this.signupForm.value;
      console.log(this.user)
    }

    hasError(){
      return this.signupForm.invalid;
    }

}
