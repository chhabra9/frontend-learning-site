import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { DefaultComponent } from './component/default/default.component';

const routes: Routes = [
  {component:SignUpComponent,path:'signup'},
  {component:LoginComponent, path:'login'},
  {component:HomeComponent, path: ''},
  {component:DefaultComponent,path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
