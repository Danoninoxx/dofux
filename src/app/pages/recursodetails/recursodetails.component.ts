import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Recurso {
  id: number; 
  name: string; 
  image: string; 
  description: string; 
}
@Component({
  selector: 'app-recursodetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recursodetails.component.html',
  styleUrl: './recursodetails.component.scss'
})
export class RecursodetailsComponent implements OnInit {
recurso: Recurso | null = null;

  private apiUrl = 'https://dofuxapi.onrender.com/recursos';

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
      this.getRecursoById(id);
    }
  }

  getRecursoById(id: number): void {
    this.http.get<Recurso>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.recurso = data;
      },
      error: (error) => {
        console.error('Error al obtener el recurso:', error);
      }
    });
  }
  goBack() {
    this.router.navigate(['/recursos']);
  }
}
