import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Bestia {
  id: number;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-bestiario',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bestiario.component.html',
  styleUrl: './bestiario.component.scss'
})
export class BestiarioComponent implements OnInit {
  bestiario: Bestia[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadBestiario();
  }

  loadBestiario(): void {
    this.http.get<Bestia[]>('https://dofuxapi.onrender.com/bestiario').subscribe({
      next: (data) => {
        this.bestiario = data;
      },
      error: (error) => {
        console.error('Error al cargar bestiario:', error);
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/bestiario', id]);
  }

}
