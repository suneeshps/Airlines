import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../shared/services/auth-service';
import labels from '../../../assets/json/labels.json';


@Component({
  selector: 'klm-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm: FormGroup;
  labelData: any;


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required,  Validators.email]],
      password: ['', [Validators.required]]
    });
    this.labelData = labels.loginComponent;

  }
  login(): void {
    if (this.authService.login(this.loginForm.get('userName')?.value, this.loginForm.get('password')?.value)) {
      this.router.navigate(['/dashboard']);
    } else {
      this.router.navigate(['/login']);
    }
  }

}
