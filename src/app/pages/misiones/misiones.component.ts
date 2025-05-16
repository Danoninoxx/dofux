import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface Mision {
  titulo: string;
  descripcion: string;
  nivelRequisito?: number;
  recompensas: string[];
}

@Component({
  selector: 'app-misiones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './misiones.component.html',
  styleUrl: './misiones.component.scss'
})

export class MisionesComponent implements OnInit {
  misiones: Mision[] = [];

  ngOnInit(): void {
    this.misiones = [
      {
        titulo: 'La Búsqueda del Dofus Esmeralda',
        descripcion: 'Recopila todas las pistas para localizar el Dofus Esmeralda en la Montaña Koalak.',
        nivelRequisito: 60,
        recompensas: ['500.000 XP', 'Kan de Puntos de Logro', 'Talismano Koalak']
      },
      {
        titulo: 'Rescate en Frigost',
        descripcion: 'Libera a los habitantes congelados y derrota al General Cawotte.',
        nivelRequisito: 70,
        recompensas: ['1.000.000 XP', 'Archiduc Frigorífico', 'Título Héroe de Frigost']
      },
      {
        titulo: 'El Secreto de las Mazmorras',
        descripcion: 'Descubre el misterio tras cada una de las mazmorras clásicas.',
        recompensas: ['300.000 XP', 'Objetos raros de mazmorra']
      }
    ];
  }
}
