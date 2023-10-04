import { UserService } from 'src/app/services/user/user.service';
import { CourseService } from './../../services/course/course.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.interface';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.css']
})
export class AllCourseComponent implements OnInit {
  courses!:Course[];
  constructor(private courseService: CourseService,private userService: UserService){}
  ngOnInit(): void {
    this.courseService.getAllCourse().subscribe({
      next: (val:Course[] )=>{
        this.courses = val;
      },
      error:(err)=>{
      }
    })
  }
}
