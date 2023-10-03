import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { User } from 'src/app/models/user.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

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
    private location: Location,
    private cartService: CartService
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
        localStorage.setItem('userId',result.user_id);
        localStorage.setItem('instructorId',result.instructorId);
        localStorage.setItem('accessToken', result.access_token);
        this.cartService.getAllCartsElementA().subscribe({
          next:(value)=>{
            this.cartService.setCart(value);
          },
          error:(err)=>{
          }
        })
        if(result.instructorId){
          localStorage.setItem('instructorId',result.instructorId);
        }
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
