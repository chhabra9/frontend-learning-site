import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import { DefaultComponent } from './component/default/default.component';
import { MyCourseComponent } from './component/my-course/my-course.component';
import { AuthgaurdGuard } from './gaurds/authgaurd/authgaurd.guard';
import { NotLoginComponent } from './component/not-login/not-login.component';
import { CartComponent } from './component/cart/cart.component';
import { InstructorFormComponent } from './component/instructor-form/instructor-form.component';
import { MySpaceComponent } from './component/my-space/my-space.component';
import { ManageModulesComponent } from './component/manage-modules/manage-modules.component';

const routes: Routes = [
  {component:SignUpComponent,path:'signup'},
  {component:LoginComponent, path:'login'},
  {component:HomeComponent, path: ''},
  {component: MyCourseComponent,path:'myCourse', canActivate:[AuthgaurdGuard]},
  {component:NotLoginComponent,path:'notLogin'},
  {component:CartComponent,path:'cart',canActivate:[AuthgaurdGuard]},
  {component:InstructorFormComponent,path:'instructorForm',canActivate:[AuthgaurdGuard]},
  {component:MySpaceComponent,path:'mySpace'},
  {component:ManageModulesComponent,path:'manageModules'},
  {component:DefaultComponent,path:'**'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
