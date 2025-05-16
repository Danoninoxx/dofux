import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Bestia {
  id: number; 
  name: string; 
  image: string; 
  description: string; 
}
@Component({
  selector: 'app-bestiadetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bestiadetails.component.html',
  styleUrl: './bestiadetails.component.scss'
})
export class BestiadetailsComponent implements OnInit {
bestia: Bestia | null = null;

  private apiUrl = 'https://dofuxapi.onrender.com/bestiario';

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
      this.getBestiaById(id);
    }
  }

  getBestiaById(id: number): void {
    this.http.get<Bestia>(`${this.apiUrl}/${id}`).subscribe({
      next: (data) => {
        this.bestia = data;
      },
      error: (error) => {
        console.error('Error al obtener la bestia:', error);
      }
    });
  }
  goBack() {
    this.router.navigate(['/bestiario']);
  }
}
