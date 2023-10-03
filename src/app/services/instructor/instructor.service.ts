import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http:HttpClient) { }

  makeUserInstructor(instructorDetails:any){
    const authToken = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    const userId = localStorage.getItem('userId');
   return this.http.post(`http://localhost:3000/api/instructor/${userId}`,instructorDetails,httpOptions);
  }
}
