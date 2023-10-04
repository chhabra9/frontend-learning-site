import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StudentInfo } from 'src/app/models/studentInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor(private http:HttpClient) { }
   getSaleByMonth():Observable<any[]>{
    const authToken = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    const instructorId = localStorage.getItem('instructorId');
    return this.http.get<any[]>(`http://localhost:3000/api/userCourse/analytics/${instructorId}`,httpOptions)
  }

  getAllStudent():Observable<StudentInfo[]>{
    const authToken = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    const instructorId = localStorage.getItem('instructorId');
    return this.http.get<StudentInfo[]>(`http://localhost:3000/api/userCourse/analytics/getStudent/${instructorId}`,httpOptions)
  }
  getSalesByCourse():Observable<any[]>{
    const authToken = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    const instructorId = localStorage.getItem('instructorId');
      return this.http.get<any[]>(`http://localhost:3000/api/userCourse/analytics/salesByCourse/${instructorId}`,httpOptions)
  }
  };

