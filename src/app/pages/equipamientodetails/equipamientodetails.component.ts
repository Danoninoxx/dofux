import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

interface Equipo {
  id: number;
  name: string;
  type: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-equipamientodetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipamientodetails.component.html',
  styleUrl: './equipamientodetails.component.scss'
})
export class EquipamientodetailsComponent implements OnInit{
equipo: Equipo | null = null;

  private apiUrl = 'https://dofuxapi.onrender.com/equipamiento';

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
      this.getEquipamientoById(id);
    }
  }

  getEquipamientoById(id: number): void {
    this.http.get<Equipo>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.equipo = data;
      },
      error: (error) => {
        console.error('Error al obtener el equipo:', error);
      }
    });
  }

  goBack() {
    this.router.navigate(['/equipamiento']);
  }
}
