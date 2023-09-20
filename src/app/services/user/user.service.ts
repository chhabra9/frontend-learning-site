import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http : HttpClient) {}

  getAllUser(){
    const authToken = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    return this.http.get('http://localhost:3000/api/user',httpOptions);
  }
}
