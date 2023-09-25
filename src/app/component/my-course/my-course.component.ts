import { Course } from 'src/app/models/course.interface';
import { CourseService } from 'src/app/services/course/course.service';
import { AuthService } from './../../services/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-my-course',
  templateUrl: './my-course.component.html',
  styleUrls: ['./my-course.component.css']
})
export class MyCourseComponent {
  courses!:Course[]
  constructor(private courseService: CourseService){}
  ngOnInit(): void {
    this.courseService.getAllUserCourse().subscribe({
      next: (val:Course[] )=>{
        this.courses = val;
        console.log(val);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
