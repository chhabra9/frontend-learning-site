import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from 'src/app/models/course.interface';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  @Input()course!:Course ;
  @Input() isMyCourse:boolean =false;
  @Input() isInstructor:boolean =false;
  constructor( private authService:AuthService, private router:Router,private cartService: CartService){
  }
  subscribe(){
    const isLogin = this.authService.getUserLoginStatus();
    if(!isLogin){
      this.router.navigate(['/login']);
    }else{
      this.cartService.addToCart(this.course);
    }
  }
  manageCourse(){
    this.router.navigate(['/manageModules'])
  }
}
