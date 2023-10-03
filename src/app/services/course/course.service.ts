import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from 'src/app/models/course.interface';
import { User } from 'src/app/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(private http: HttpClient) { }
  getAllCourse():Observable<Course[]>{
    return this.http.get<Course[]>('http://localhost:3000/api/course');
  }
  getAllUserCourse(): Observable<Course[]>{
    const authToken = localStorage.getItem('accessToken');
    const userId = localStorage.getItem('userId');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    return this.http.get<Course[]>(`http://localhost:3000/api/userCourse/${userId}`,httpOptions);
  }
  getAllInstructorCourse():Observable<Course[]>{
    const authToken = localStorage.getItem('accessToken');
    const httpOptions = {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + authToken
      })
    };
    const instructorId = localStorage.getItem("instructorId");
   return this.http.get<Course[]>(`http://localhost:3000/api/course/instructor/${instructorId}`,httpOptions)
  }
}
