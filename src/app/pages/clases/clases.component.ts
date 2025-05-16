import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Clase {
  id: number;
  title: string;
  class_logo: string;
  image: string;
  short_desc: string;
  description: string;
}

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styleUrls: ['./clases.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ClasesComponent implements OnInit {
  isAdmin: boolean = false; // Para saber si el usuario es admin

  // Array donde guardaremos las clases
  classes: Clase[] = [];

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadClasses();
    this.isAdmin = this.authService.isAdmin();
  }

  loadClasses(): void {
    this.http.get<Clase[]>('https://dofuxapi.onrender.com/clases').subscribe({
      next: (data) => {
        this.classes = data;
      },
      error: (error) => {
        console.error('Error al cargar clases:', error);
      }
    });
  }
  verDetalle(id: number): void {
    this.router.navigate(['/clases', id]);
  }

  goToAdminPanel(): void {
    // Navega al componente de administración
    this.router.navigate(['/clasesadmin']);
  }
}
