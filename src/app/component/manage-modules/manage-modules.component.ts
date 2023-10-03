import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-modules',
  templateUrl: './manage-modules.component.html',
  styleUrls: ['./manage-modules.component.css']
})
export class ManageModulesComponent {

  show:boolean = false;
  constructor(private router:Router){}
  showTools(){
    this.show =  !this.show;
  }
  addModule(){

  }
}
