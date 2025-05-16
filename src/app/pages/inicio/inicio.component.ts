import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.scss'
})
export class InicioComponent {
  username: string | null = null;

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkAuthUser();
    setInterval(() => {
      this.checkAuthUser();
    }, 1000);
  }

  checkAuthUser() {
    this.username = localStorage.getItem('username'); // Retrieve username
  }

  irAClases() {
    this.router.navigate(['/clases']); // Redirect to /clases
  }

  irAGuia() {
    this.router.navigate(['/guia']); // Redirect to /guia
  }

  irAEquipamiento() {
    this.router.navigate(['/equipamiento']); // Redirect to /equipamiento
  }

  goToLogin() {
    this.router.navigate(['/login']); // redirect to /login
  }

  goToRegister() {
    this.router.navigate(['/register']); // redirect to /login
  }
}
