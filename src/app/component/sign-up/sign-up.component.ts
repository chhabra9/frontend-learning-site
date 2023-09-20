import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { AllUserDataService } from 'src/app/services/allUserData/all-user-data.service';
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
    errorMessage!:string;


    constructor(
      private fb:FormBuilder,
      private authService: AuthService,
      private router :Router,
      private allUserData: AllUserDataService
      ){
      this.hide = true;
      this.errorMessage ='';
    }

    ngOnInit(): void {
      this.signupForm = this.fb.group({
        firstName: ['',[Validators.required]],
        lastName: ['',[Validators.required]],
        email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required, Validators.pattern(this.passwordExp)]],
          street: [''],
          city: [''],
          state: ['']
      })
    }
    get firstName() { return this.signupForm.get('firstName'); }
    get lastName() { return this.signupForm.get('lastName'); }
    get email() { return this.signupForm.get('email'); }
    get password() { return this.signupForm.get('password'); }

    signupUser(){
      this.errorMessage = ''
      this.user = this.signupForm.value;
      this.authService.signupUser(this.user).subscribe((res:User[] |Object)=>{
        this.router.navigate(['/login'])
      },(err)=>{
        this.signupForm.reset({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
            street: '',
            city: '',
            state: ''
          })
        this.errorMessage = err.error;
      }
      )
       }

    hasError(){
      return this.signupForm.invalid;
    }

}
