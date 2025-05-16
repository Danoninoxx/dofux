import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCalendarCellClassFunction, MatDatepicker, MatDatepickerModule } from '@angular/material/datepicker';

export interface AlmanaxEntrada {
  fecha: string;          // Formato ISO: YYYY-MM-DD
  bonus: string;
  descripcion: string;
  recompensa?: string;
}

@Component({
  selector: 'app-almanax',
  templateUrl: './almanax.component.html',
  styleUrls: ['./almanax.component.scss'],
  standalone: true,
  imports: [CommonModule, MatDatepickerModule, MatNativeDateModule],
})
export class AlmanaxComponent implements OnInit {
  entradas: AlmanaxEntrada[] = [];
  selectedDate: Date = new Date();
  ofrendaActual?: AlmanaxEntrada;

  ngOnInit(): void {
    this.entradas = [
      { fecha: '2025-05-15', bonus: 'Día de la Ascensión', descripcion: 'Los monstruos otorgan 25% más de experiencia hoy.', recompensa: 'Pan de Almanax x5' },
      { fecha: '2025-05-16', bonus: 'Fiesta de Resistencia', descripcion: 'Aumenta la resistencia base de todos los personajes en 15 puntos.' },
      { fecha: '2025-05-17', bonus: 'Día de Aventura', descripcion: 'Todos los Kamas obtenidos aumentan un 20%.', recompensa: 'Cápsula de kamas x1' },
      { fecha: '2025-06-01', bonus: 'Bonus Junio 2', descripcion: 'Beneficio especial del 2 de junio de 2025.', recompensa: 'Recompensa x1 Pan de Almanax' },
      { fecha: '2025-06-02', bonus: 'Bonus Junio 3', descripcion: 'Beneficio especial del 3 de junio de 2025.', recompensa: 'Recompensa x2 Ficha' },
      { fecha: '2025-06-03', bonus: 'Bonus Junio 4', descripcion: 'Beneficio especial del 4 de junio de 2025.', recompensa: 'Recompensa x3 Pata de arakna' },
      { fecha: '2025-06-04', bonus: 'Bonus Junio 5', descripcion: 'Beneficio especial del 5 de junio de 2025.', recompensa: 'Recompensa x4 Globo rojo' },
      { fecha: '2025-06-05', bonus: 'Bonus Junio 6', descripcion: 'Beneficio especial del 6 de junio de 2025.', recompensa: 'Recompensa x5 Pelo de Torkelonia' },
      { fecha: '2025-06-06', bonus: 'Bonus Junio 7', descripcion: 'Beneficio especial del 7 de junio de 2025.', recompensa: 'Recompensa x1 Talismano' },
      { fecha: '2025-06-07', bonus: 'Bonus Junio 8', descripcion: 'Beneficio especial del 8 de junio de 2025.', recompensa: 'Recompensa x2 Babas de kraskol' },
      { fecha: '2025-06-08', bonus: 'Bonus Junio 9', descripcion: 'Beneficio especial del 9 de junio de 2025.', recompensa: 'Recompensa x3 Guijarro lunar' },
      { fecha: '2025-06-09', bonus: 'Bonus Junio 10', descripcion: 'Beneficio especial del 10 de junio de 2025.', recompensa: 'Recompensa x4 Esencia Azul' },
      { fecha: '2025-06-10', bonus: 'Bonus Junio 11', descripcion: 'Beneficio especial del 11 de junio de 2025.', recompensa: 'Recompensa x5 Cubo de agua' },
      { fecha: '2025-06-11', bonus: 'Bonus Junio 12', descripcion: 'Beneficio especial del 12 de junio de 2025.', recompensa: 'Recompensa x1 Metaria amarilla' },
      { fecha: '2025-06-12', bonus: 'Bonus Junio 13', descripcion: 'Beneficio especial del 13 de junio de 2025.', recompensa: 'Recompensa x2 Tabla de fresno' },
      { fecha: '2025-06-13', bonus: 'Bonus Junio 14', descripcion: 'Beneficio especial del 14 de junio de 2025.', recompensa: 'Recompensa x3 Pata de arakna' },
      { fecha: '2025-06-14', bonus: 'Bonus Junio 15', descripcion: 'Beneficio especial del 15 de junio de 2025.', recompensa: 'Recompensa x4 Globo rojo' },
      { fecha: '2025-06-15', bonus: 'Bonus Junio 16', descripcion: 'Beneficio especial del 16 de junio de 2025.', recompensa: 'Recompensa x5 Pelo de Torkelonia' },
      { fecha: '2025-06-16', bonus: 'Bonus Junio 17', descripcion: 'Beneficio especial del 17 de junio de 2025.', recompensa: 'Recompensa x1 Talismano' },
      { fecha: '2025-06-17', bonus: 'Bonus Junio 18', descripcion: 'Beneficio especial del 18 de junio de 2025.', recompensa: 'Recompensa x2 Babas de kraskol' },
      { fecha: '2025-06-18', bonus: 'Bonus Junio 19', descripcion: 'Beneficio especial del 19 de junio de 2025.', recompensa: 'Recompensa x3 Guijarro lunar' },
      { fecha: '2025-06-19', bonus: 'Bonus Junio 20', descripcion: 'Beneficio especial del 20 de junio de 2025.', recompensa: 'Recompensa x4 Esencia Azul' },
      { fecha: '2025-06-20', bonus: 'Bonus Junio 21', descripcion: 'Beneficio especial del 21 de junio de 2025.', recompensa: 'Recompensa x5 Cubo de agua' },
      { fecha: '2025-06-21', bonus: 'Bonus Junio 22', descripcion: 'Beneficio especial del 22 de junio de 2025.', recompensa: 'Recompensa x1 Metaria amarilla' },
      { fecha: '2025-06-22', bonus: 'Bonus Junio 23', descripcion: 'Beneficio especial del 23 de junio de 2025.', recompensa: 'Recompensa x2 Tabla de fresno' },
      { fecha: '2025-06-23', bonus: 'Bonus Junio 24', descripcion: 'Beneficio especial del 24 de junio de 2025.', recompensa: 'Recompensa x3 Pata de arakna' },
      { fecha: '2025-06-24', bonus: 'Bonus Junio 25', descripcion: 'Beneficio especial del 25 de junio de 2025.', recompensa: 'Recompensa x4 Globo rojo' },
      { fecha: '2025-06-25', bonus: 'Bonus Junio 26', descripcion: 'Beneficio especial del 26 de junio de 2025.', recompensa: 'Recompensa x5 Pelo de Torkelonia' },
      { fecha: '2025-06-26', bonus: 'Bonus Junio 27', descripcion: 'Beneficio especial del 27 de junio de 2025.', recompensa: 'Recompensa x1 Talismano' },
      { fecha: '2025-06-27', bonus: 'Bonus Junio 28', descripcion: 'Beneficio especial del 28 de junio de 2025.', recompensa: 'Recompensa x2 Babas de kraskol' },
      { fecha: '2025-06-28', bonus: 'Bonus Junio 29', descripcion: 'Beneficio especial del 29 de junio de 2025.', recompensa: 'Recompensa x3 Guijarro lunar' },
      { fecha: '2025-06-29', bonus: 'Bonus Junio 30', descripcion: 'Beneficio especial del 30 de junio de 2025.', recompensa: 'Recompensa x4 Esencia Azul' }
    ];
    this.updateOfrenda(this.selectedDate);
  }

  dateSelected(date: Date | null): void {
    if (!date) {
      return;
    }
    this.selectedDate = date;
    this.updateOfrenda(date);
  }

  private updateOfrenda(date: Date) {
    const iso = date.toISOString().split('T')[0];
    this.ofrendaActual = this.entradas.find(e => e.fecha === iso);
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    if (view === 'month') {
      const iso = cellDate.toISOString().split('T')[0];
      return this.entradas.some(e => e.fecha === iso) ? 'tiene-ofrenda' : '';
    }
    return '';
  }
}