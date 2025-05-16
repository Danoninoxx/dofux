import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Mazmorra {
  id: number;
  name: string;
  level: string;
  description: string;
  stats: JSON;
  image: string;
}

@Component({
  selector: 'app-mazmorras',
  templateUrl: './mazmorras.component.html',
  styleUrls: ['./mazmorras.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MazmorrasComponent implements OnInit {

  // Array donde guardaremos las mazmorras
  dungeons: Mazmorra[] = [];

  constructor(private http: HttpClient, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadDungeons();
  }

  loadDungeons(): void {
    this.http.get<Mazmorra[]>('https://dofuxapi.onrender.com/mazmorras').subscribe({
      next: (data) => {
        this.dungeons = data;
      },
      error: (error) => {
        console.error('Error al cargar mazmorras:', error);
      }
    });
  }
  verDetalle(id: number): void {
    this.router.navigate(['/mazmorras', id]);
  }
}