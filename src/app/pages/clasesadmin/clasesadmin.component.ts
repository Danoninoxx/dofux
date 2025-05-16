import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Clase {
  id: number;
  title: string;
  class_logo: string;
  image: string;
  short_desc: string;
  description: string;
}

@Component({
  selector: 'app-clasesadmin',
  templateUrl: './clasesadmin.component.html',
  styleUrls: ['./clasesadmin.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class ClasesadminComponent implements OnInit {
  clases: Clase[] = [];
  selectedClase: Clase = {
    id: 0,
    title: '',
    class_logo: '',
    image: '',
    short_desc: '',
    description: ''
  };
  showForm: boolean = false;  // Para mostrar/ocultar el formulario
  isEditMode: boolean = false; // Para saber si es "insertar" o "editar"


  private apiUrl = 'https://dofuxapi.onrender.com/clases';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadClases();
  }

  loadClases(): void {
    this.http.get<Clase[]>(this.apiUrl).subscribe({
      next: (data) => {
        this.clases = data;
      },
      error: (err) => {
        console.error('Error al cargar clases:', err);
      }
    });
  }

  // Botón para mostrar el formulario de creación
  newClase(): void {
    this.selectedClase = {
      id: 0,
      title: '',
      class_logo: '',
      image: '',
      short_desc: '',
      description: ''
    };
    this.isEditMode = false;
    this.showForm = true;
  }

  // Botón para editar
  editClase(clase: Clase): void {
    // Clonar el objeto para no modificarlo directamente en la lista
    this.selectedClase = { ...clase };
    this.isEditMode = true;
    this.showForm = true;
  }

  // Guardar (crear o actualizar)
  saveClase(): void {
    if (!this.selectedClase) return;

    if (this.isEditMode) {
      // Actualizar
      const id = this.selectedClase.id;
      this.http.put(`${this.apiUrl}/${id}`, this.selectedClase).subscribe({
        next: () => {
          console.log('Clase actualizada');
          this.showForm = false;
          this.loadClases();
        },
        error: (err) => {
          console.error('Error al actualizar clase:', err);
        }
      });
    } else {
      // Crear
      this.http.post(this.apiUrl, this.selectedClase).subscribe({
        next: () => {
          console.log('Clase creada');
          this.showForm = false;
          this.loadClases();
        },
        error: (err) => {
          console.error('Error al crear clase:', err);
        }
      });
    }
  }

  // Eliminar
  deleteClase(clase: Clase): void {
    if (!confirm(`¿Estás seguro de eliminar la clase "${clase.title}"?`)) {
      return;
    }

    this.http.delete(`${this.apiUrl}/${clase.id}`).subscribe({
      next: () => {
        console.log('Clase eliminada');
        this.loadClases();
      },
      error: (err) => {
        console.error('Error al eliminar clase:', err);
      }
    });
  }

  // Cancelar y cerrar formulario
  cancel(): void {
    this.selectedClase = {
      id: 0,
      title: '',
      class_logo: '',
      image: '',
      short_desc: '',
      description: ''
    };
    this.showForm = false;
    this.isEditMode = false;
  }
}
