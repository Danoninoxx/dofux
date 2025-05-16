import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface Logro {
  titulo: string;
  descripcion: string;
  puntos: number;
  fechaDesbloqueo?: string;
}

@Component({
  selector: 'app-logros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './logros.component.html',
  styleUrl: './logros.component.scss'
})
export class LogrosComponent implements OnInit {
  logros: Logro[] = [];

  ngOnInit(): void {
    this.logros = [
      {
        titulo: 'Dominador de Mazmorras',
        descripcion: 'Completa 10 mazmorras diferentes en el juego.',
        puntos: 50,
        fechaDesbloqueo: '2025-05-10'
      },
      {
        titulo: 'Rey del PvP',
        descripcion: 'Gana 100 combates en arena contra otros jugadores.',
        puntos: 100
      },
      {
        titulo: 'Coleccionista Novato',
        descripcion: 'Colecciona 20 objetos distintos de nivel raro o superior.',
        puntos: 25,
        fechaDesbloqueo: '2025-05-12'
      }
    ];
  }
}
