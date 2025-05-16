import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Mazmorra{
  id: number
  name: string
  level: string
  description: string
  stats: Stats
  image: string
}

interface Stats {
  jefe: string;
  ubication: string;
  dificultad: string;
  recomendado: string;
}
@Component({
  selector: 'app-mazmorradetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mazmorradetails.component.html',
  styleUrl: './mazmorradetails.component.scss'
})
export class MazmorradetailsComponent implements OnInit {
dung: Mazmorra | null = null;

  private apiUrl = 'https://dofuxapi.onrender.com/mazmorras';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Captura el parámetro :id de la URL
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam; // Convertir a number
      this.getMazmorraById(id);
    }
  }

  getMazmorraById(id: number): void {
    this.http.get<Mazmorra>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.dung = data;
      },
      error: (error) => {
        console.error('Error al obtener la mazmorra:', error);
      }
    });
  }
  goBack() {
    this.router.navigate(['/mazmorras']);
  }
}
