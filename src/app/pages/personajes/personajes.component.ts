import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
// Interfaces

export interface OficioPersonaje {
  id_oficio: number;
  oficio_name: string;
  nivel: number;
  editing?: boolean;
}
export interface Personaje {
  id: number;
  user_id: number;
  name: string;
  level: number;
  clase: string;
  character_img: string;  
  oficios?: OficioPersonaje[];
}
export interface Clase {
  id: number;
  title: string;
}


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class PersonajesComponent implements OnInit {
  hasCharacter = false;
  character: Personaje | null = null;
  oficios: OficioPersonaje[] = [];

  // Objeto para crear un nuevo personaje
  newCharacter: Personaje = {
    id: 0,
    user_id: 0,
    name: '',
    level: 1,
    clase: '',
    character_img: '',
  };

  // Lista de clases disponibles
  classesList: Clase[] = [];

  private personajesApiUrl = 'https://dofuxapi.onrender.com/personajes';
  private clasesApiUrl = 'https://dofuxapi.onrender.com/clases';

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadCharacter();
    this.loadClasses();
  }

  // Carga el personaje del usuario si existe
  loadCharacter(): void {
    const userId = this.authService.getUserId();
    // Llamada directa al endpoint
    this.http.get<Personaje>(`https://dofuxapi.onrender.com/personajes/${userId}`).subscribe({
      next: (data) => {
        this.hasCharacter = true;
        this.character = data; 
      },
      error: (err) => {
        if (err.status === 404) {
          this.hasCharacter = false;
          this.character = null;
        } else {
          console.error('Error al cargar personaje:', err);
        }
      }
    });
  }
  

  // Carga la lista de clases desde la tabla "clases"
  loadClasses(): void {
    this.http.get<Clase[]>(this.clasesApiUrl).subscribe({
      next: (data) => {
        this.classesList = data;
      },
      error: (err) => {
        console.error('Error al cargar clases:', err);
      }
    });
  }


createCharacter(): void {
  const userId = this.authService.getUserId();
  const payload = {
    ...this.newCharacter,
    user_id: userId
  };

  this.http.post<Personaje>(this.personajesApiUrl, payload).subscribe({
    next: (data) => {
      this.hasCharacter = true;
      this.character = data;
      this.loadCharacter();
    },
    error: (err) => {
      console.error('Error al crear personaje:', err);
    }
  });
}

updateOficioNivel(oficio: OficioPersonaje): void {
  const payload = {
    id_personaje: this.character?.id,
    id_oficio: oficio.id_oficio,
    nivel: oficio.nivel
  };

  // Realiza la llamada PATCH (o PUT)
  this.http.patch(`https://dofuxapi.onrender.com/oficioslevel`, payload)
    .subscribe({
      next: (data) => {
        // Si la actualización es exitosa, se desactiva el modo edición
        oficio.editing = false;
      },
      error: (err) => {
        console.error("Error al actualizar el nivel del oficio:", err);
      }
    });
}

irAModelo3D() {
  this.router.navigate(['/personajemodel']); // Redirect to /personajemodel
}


}
