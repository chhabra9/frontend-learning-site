import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  errorMessage!:string;
constructor(private user:UserService){}

  getAllUser(){
    this.errorMessage = '';
    this.user.getAllUser().subscribe({
      next:(result)=>{
      },
      error:(err)=>{
          this.errorMessage = err.error;
      }
    })
  }
}
