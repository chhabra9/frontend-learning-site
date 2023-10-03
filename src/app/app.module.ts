import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './component/sign-up/sign-up.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './component/login/login.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HomeComponent } from './component/home/home.component';
import { DefaultComponent } from './component/default/default.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { AllCourseComponent } from './component/all-course/all-course.component';
import {MatCardModule} from '@angular/material/card';
import { CourseComponent } from './component/single/course/course.component';
import { MyCourseComponent } from './component/my-course/my-course.component';
import { NotLoginComponent } from './component/not-login/not-login.component';
import { environment } from '../../environment';
import { CartComponent } from './component/cart/cart.component';
import { InstructorFormComponent } from './component/instructor-form/instructor-form.component';
import { MySpaceComponent } from './component/my-space/my-space.component';
import { ManageModulesComponent } from './component/manage-modules/manage-modules.component';
import {CdkAccordionModule} from '@angular/cdk/accordion';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    LoginComponent,
    HomeComponent,
    DefaultComponent,
    NavbarComponent,
    AllCourseComponent,
    CourseComponent,
    MyCourseComponent,
    NotLoginComponent,
    CartComponent,
    InstructorFormComponent,
    MySpaceComponent,
    ManageModulesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    CdkAccordionModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
