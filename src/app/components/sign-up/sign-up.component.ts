import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';
import labels from '../../../assets/json/labels.json';


@Component({
  selector: 'klm-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  signUpForm: FormGroup;
  labelData: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    this.signUpForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    });
    this.labelData = labels.signUpComponent;

  }
  signUp(): void {
    if(this.authService.login(this.signUpForm.get('email')?.value, this.signUpForm.get('password')?.value)){
      this.router.navigate(['/dashboard']);
     }else{
     this.router.navigate(['']);
     }
   }
}
