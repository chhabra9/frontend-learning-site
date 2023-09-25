import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isUserLogin!:boolean;
  constructor(private http: HttpClient) {
     this.isUserLogin = !! localStorage.getItem('accessToken')
  }
  getUserLoginStatus(){
    return this.isUserLogin;
  }
  setUserLoginStatus(status:boolean){
      this.isUserLogin = status;
  }

  signupUser(user:User){
      return this.http.post('http://localhost:3000/api/auth/register',user);
  }
  loginUser(loginInfo:any){
      return this.http.post('http://localhost:3000/api/auth/login',loginInfo);
  }
}
