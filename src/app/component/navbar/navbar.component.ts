import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable, map } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { AuthService } from 'src/app/services/auth/auth.service';
import { CartService } from 'src/app/services/cart/cart.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, AfterContentChecked{
  isLogin!:boolean;
  currentCartValue!:number;
  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private cartService: CartService
    ) {
    this.currentCartValue = 0;
  }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches)
  );
  ngOnInit(): void {
    this.isLogin = this.authService.getUserLoginStatus();
    console.log(this.isLogin);
  }

  ngAfterContentChecked(): void {
    console.log(this.authService.getUserLoginStatus());
    this.currentCartValue = this.cartService.getAllCartElements().length
    this.isLogin = this.authService.getUserLoginStatus()
}
  logoutUser(){
    console.log('working')
    localStorage.removeItem('accessToken');
    this.authService.setUserLoginStatus(false);
    this.isLogin = false;
  }
}
