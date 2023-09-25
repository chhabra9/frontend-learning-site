import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!:FormGroup;
  hide!:boolean;
  errorMessage!:string;
  canGoBack!: boolean;

  constructor(
    private fb:FormBuilder,
    private authService: AuthService,
    private router: Router,
    private location: Location
    ){
    this.hide = true;
    this.errorMessage = '';
      this.canGoBack = !!this.router.getCurrentNavigation()?.previousNavigation;
    }

  ngOnInit(): void {
    this.loginForm =this.fb.group({
      email: ['',[Validators.required, Validators.email]],
        password: ['',[Validators.required]],
    })
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  loginUser(){
    this.errorMessage = '';
    this.authService.loginUser(this.loginForm.value).subscribe({
      next:(result:any)=>{
        localStorage.setItem('email',result.email);
        localStorage.setItem('accessToken', result.access_token);
        this.authService.setUserLoginStatus(true);
        if(this.canGoBack){
          this.location.back();
        }
        else{
          this.router.navigate([''])
        }
      },
      error:(error)=>{
        this.errorMessage = error.error;
      }
    })
  }
  hasError(){
    return this.loginForm.invalid;
  }
}
