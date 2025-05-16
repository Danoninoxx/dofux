import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Clase {
  id: number;
  title: string;
  class_logo: string;
  image: string;
  short_desc: string;
  description: string;
}

@Component({
  selector: 'app-clasedetails',
  templateUrl: './clasedetails.component.html',
  styleUrls: ['./clasedetails.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ClasedetailsComponent implements OnInit {
  clase: Clase | null = null;
  private apiUrl = 'https://dofuxapi.onrender.com/clases';

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
      this.getClaseById(id);
    }
  }

  getClaseById(id: number): void {
    this.http.get<Clase>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.clase = data;
      },
      error: (error) => {
        console.error('Error al obtener la clase:', error);
      }
    });
  }
  goBack() {
    this.router.navigate(['/clases']);
  }
}
