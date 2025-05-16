import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

interface Equipo {
  id: number;
  name: string;
  type: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-equipamiento',
  templateUrl: './equipamiento.component.html',
  styleUrls: ['./equipamiento.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class EquipamientoComponent implements OnInit {
  equipo: any[] = [];
  allEquipo: any[] = []; // copia completa de los datos
  selectedType: string = '';
  tiposEquipo: string[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('https://dofuxapi.onrender.com/equipamiento').subscribe(data => {
      this.allEquipo = data;
      this.equipo = data;
      this.tiposEquipo = Array.from(new Set(data.map(item => item.type)));
    });
  }

  filterEquipo(): void {
    // Si no se selecciona ningún tipo, muestra todo
    if (!this.selectedType) {
      this.equipo = this.allEquipo;
    } else {
      this.equipo = this.allEquipo.filter(item => item.type === this.selectedType);
    }
  }

  verDetalle(id: number): void {
    this.router.navigate(['/equipamiento', id]);
  }
}