import { Component, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [HttpClientModule, FormsModule, CommonModule],
  standalone: true
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  message: string = '';

  private http = inject(HttpClient);
  private router = inject(Router);

  constructor() {}

  ngOnInit() {
    // 🔹 If the user is already logged in, redirect to /inicio
    if (localStorage.getItem('token')) {
      this.router.navigate(['/inicio']);
    }
  }

  login() {
    const loginData = { username: this.username, password: this.password };

    this.http.post('https://dofuxapi.onrender.com/login', loginData).subscribe({
      next: (response: any) => {
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', this.username);
        localStorage.setItem('admin', response.admin);
        localStorage.setItem('id', response.id);
        console.log(response);
        this.router.navigate(['/inicio']); 
      },
      error: (error) => {
        if (error.status === 401) {
          this.message = 'Invalid username or password';
        } else {
          this.message = 'Server error. Please try again later.';
        }
        console.error('Login failed:', error);
      }
    });
  }

  register() {
    this.router.navigate(['/register']);
  }
  
}
