import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { InstructorService } from 'src/app/services/instructor/instructor.service';

@Component({
  selector: 'app-instructor-form',
  templateUrl: './instructor-form.component.html',
  styleUrls: ['./instructor-form.component.css']
})
export class InstructorFormComponent {
  instructorForm!:FormGroup;
  hide!:boolean;
  errorMessage!:string;
  canGoBack!: boolean;

  constructor(
    private fb:FormBuilder,
    private instructorService:InstructorService,
    private router: Router,
    ){
    this.hide = true;
    this.errorMessage = '';
      this.canGoBack = !!this.router.getCurrentNavigation()?.previousNavigation;
    }

  ngOnInit(): void {
    this.instructorForm =this.fb.group({
      qualification: ['',[Validators.required]],
        certifications: [''],
        experience: ['',[Validators.required,Validators.max(10)]]
    })
  }

  get qualification() { return this.instructorForm.get('qualification'); }
  get password() { return this.instructorForm.get('experience'); }

  makeInstructor(){
    this.errorMessage = '';
    this.instructorService.makeUserInstructor(this.instructorForm.value).subscribe({
      next:(value)=>{
        localStorage.setItem('isInstructor',"true");
        this.router.navigate(['']);
      },
      error:(err)=>{
        if(err.status === 400)
          this.errorMessage = err.error;
        else
        this.errorMessage= 'Please try again after some time';
      }
    })
  }
  hasError(){
    return this.instructorForm.invalid;
  }
}
