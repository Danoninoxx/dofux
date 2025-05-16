import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) {}

  isAuthenticated(): boolean {
    return localStorage.getItem('token') !== null;
  }

  isAdmin(): boolean {
    const adminString = localStorage.getItem('admin');
    return adminString === 'true';
  }

  getCurrentUser(): any {
    const user = localStorage.getItem('username');
    return user ? JSON.parse(user) : null;
  }

  getUserId(): number {
    const storedId = localStorage.getItem('id');
    return storedId ? parseInt(storedId, 10) : 0;
  }
}