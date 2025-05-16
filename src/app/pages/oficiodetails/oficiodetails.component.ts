import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selector: 'app-oficiodetails',
  templateUrl: './oficiodetails.component.html',
  styleUrls: ['./oficiodetails.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class OficiodetailsComponent implements OnInit {
  oficio: Oficio | null = null;
  private apiUrl = 'https://dofuxapi.onrender.com/oficios';

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
      this.getOficioById(id);
    }
  }

  getOficioById(id: number): void {
    this.http.get<Oficio>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.oficio = data;
      },
      error: (error) => {
        console.error('Error al obtener la clase:', error);
      }
    });
  }
  goBack() {
    this.router.navigate(['/oficios']);
  }
}
