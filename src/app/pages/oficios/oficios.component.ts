import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Oficio {
  id: number;
  oficio_name: string;
  oficio_desc: string;
  oficio_logo: string;
}

@Component({
  selector: 'app-oficios',
  templateUrl: './oficios.component.html',
  styleUrls: ['./oficios.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class OficiosComponent implements OnInit {

  oficios: Oficio[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadOficios();
  }

  loadOficios(): void {
    this.http.get<Oficio[]>('https://dofuxapi.onrender.com/oficios').subscribe({
      next: (data) => {
        this.oficios = data;
      },
      error: (error) => {
        console.error('Error al cargar clases:', error);
      }
    });
  }
  verDetalle(id: number): void {
    this.router.navigate(['/oficios', id]);
  }
}