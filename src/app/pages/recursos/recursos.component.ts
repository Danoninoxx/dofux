import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Recurso {
  id: number;
  name: string;
  description: string;
  image: string;
}

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recursos.component.html',
  styleUrl: './recursos.component.scss'
})
export class RecursosComponent implements OnInit {
  recursos: Recurso[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.loadRecursos();
  }

  loadRecursos(): void {
    this.http.get<Recurso[]>('https://dofuxapi.onrender.com/recursos').subscribe({
      next: (data) => {
        this.recursos = data;
      },
      error: (error) => {
        console.error('Error al cargar recursos:', error);
      }
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/recursos', id]);
  }

}
