import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from 'src/app/models/course.interface';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private http:HttpClient) { }
   getCheckoutSession(courses:Course[]){
    const authToken = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    const userId = localStorage.getItem('userId');
      return this.http.post(`http://localhost:3000/api/payment/checkout-session/${userId}`,{courses:courses},httpOptions);
  }
}
