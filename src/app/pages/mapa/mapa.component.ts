import { Component } from '@angular/core';

@Component({
  selector: 'app-mapa',
  standalone: true,
  imports: [],
  templateUrl: './mapa.component.html',
  styleUrl: './mapa.component.scss'
})
export class MapaComponent {
  zoomed: boolean = false;
  transformOrigin: string = '50% 50%';

  toggleZoom(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const rect = target.getBoundingClientRect();
    
    // Si no está zoomed, calcula el punto de clic relativo a la imagen
    if (!this.zoomed) {
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const originX = (x / rect.width) * 100;
      const originY = (y / rect.height) * 100;
      this.transformOrigin = `${originX}% ${originY}%`;
    } else {
      // Si se quita el zoom, se resetea el origen
      this.transformOrigin = '50% 50%';
    }
    
    this.zoomed = !this.zoomed;
  }
}