import { HttpClient } from '@angular/common/http';
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
    return this.http.get<Course[]>('http://localhost:3000/api/course');
  }
}
