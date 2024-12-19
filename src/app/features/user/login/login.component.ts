import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/core/services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthentificationService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login(): void {
    if (this.loginForm.valid) {
      this.authService.signin(this.loginForm.value).subscribe(
        (response) => {
          console.log(response)
          // Stocker le token et le rôle dans le localStorage
          localStorage.setItem('access_token', response.accessToken);
          localStorage.setItem('role', response.user.role);
          localStorage.setItem('user', JSON.stringify(response.user)); // stocker les données de user


          // Rediriger en fonction du rôle
          if (response.user.role === 'ROLE_ADMIN') {
            this.router.navigate(['/user/dashboard']);
          } else {
            this.router.navigate(['/user/profile']);
          }
        },
        (error) => {
          console.error('Login failed', error);
          alert('Invalid email or password. Please try again.');
        }
      );
    }
  }}
