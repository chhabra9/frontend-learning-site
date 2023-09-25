import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.interface';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input()course!:Course;
  constructor( private authService:AuthService, private router:Router){
    console.log(this.course);
  }
  subscribe(){
    const isLogin = this.authService.getUserLoginStatus();
    if(!isLogin){
      this.router.navigate(['/login']);
    }
  }
}
