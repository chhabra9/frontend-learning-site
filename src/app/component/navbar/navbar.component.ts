import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked{
  isLogin!:boolean;
  currentCartValue!:number;
  isInstructor!:boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private cartService: CartService,
    private router:Router
    ) {
    this.currentCartValue = 0;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  ngOnInit(): void {

    this.isLogin = this.authService.getUserLoginStatus();
  }

  ngAfterContentChecked(): void {
    const instructorId = localStorage.getItem('instructorId');
    console.log('-d-d-d-d',instructorId);
    if( instructorId ==='undefined'|| instructorId === 'null' ||instructorId === null){
      this.isInstructor = false;
    }
    else{
      this.isInstructor = true;
    }
    this.currentCartValue = this.cartService.getAllCartElements().length
    this.isLogin = this.authService.getUserLoginStatus()
}
  logoutUser(){
    localStorage.removeItem('accessToken');
    localStorage.removeItem('email');
    localStorage.removeItem('instructorId');
    this.authService.setUserLoginStatus(false);
    this.isLogin = false;
    this.cartService.updateCart();
    this.router.navigate(['/']);
  }
}
