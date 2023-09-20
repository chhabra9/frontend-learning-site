import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  signupUser(user:User){
      return this.http.post('http://localhost:3000/api/auth/register',user);
  }
  loginUser(loginInfo:any){
      return this.http.post('http://localhost:3000/api/auth/login',loginInfo);
  }
}
