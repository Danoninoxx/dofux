import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule, HttpClientModule]
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  // Update this URL to match your backend API address
  private apiUrl = 'https://dofuxapi.onrender.com';

  constructor(private http: HttpClient, private router: Router) {}

  register(): void {
    // Client-side validation to check if passwords match
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden!';
      return;
    }

    const payload = {
      username: this.username,
      password: this.password
    };

    this.http.post(`${this.apiUrl}/signup`, payload).subscribe({
      next: (response: any) => {
        console.log('Registration successful:', response);
        localStorage.setItem('token', response.token);
        localStorage.setItem('username', this.username);
        localStorage.setItem('admin', response.admin);
        localStorage.setItem('id', response.id);
        this.router.navigate(['/inicio']); 
      },
      error: (error) => {
        console.error('Registration error:', error);
        this.errorMessage = error.error.detail || 'Registration failed. Please try again.';
      }
    });
  }
}
