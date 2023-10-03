import { CourseService } from 'src/app/services/course/course.service';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/course.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-space',
  templateUrl: './my-space.component.html',
  styleUrls: ['./my-space.component.css']
})
export class MySpaceComponent implements OnInit{
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  instructorCourse!:Course[];
constructor(private courseService:CourseService){}
ngOnInit(): void {
  this.courseService.getAllInstructorCourse().subscribe({
    next:(course)=>{
      this.instructorCourse = course;
    },
    error:(err)=>{
    }
  })
}
}
