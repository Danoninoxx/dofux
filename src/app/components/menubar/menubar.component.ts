import { Component, inject} from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
//import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class MenubarComponent {
  menuOpen = false;
  isLoggedIn: boolean = false;
  // auth = inject(AuthService);
  menuItems: string[] = ['Inicio', 'Clases', 'Oficios', 'Mapa', 'Mazmorras', 'Equipamiento', 'Recursos', 'Misiones', 'Logros', 'Almanax', 'Bestiario'];

  constructor(private router: Router) {}

  ngOnInit() {
    this.checkAuthStatus();
    setInterval(() => {
      this.checkAuthStatus();
    }, 1000);
  }

  checkAuthStatus() {
    this.isLoggedIn = !!localStorage.getItem('token'); // check if token exists
  }

  onSelectItem(item: string) {
    const ruta = item.toLowerCase();
    this.router.navigate([`/${ruta}`]); // redirect to /{item}
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  goToLogin() {
    this.router.navigate(['/login']); // redirect to /login
  }

  logout() {
    localStorage.removeItem('token'); // Erase token
    localStorage.removeItem('username'); // erase username
    localStorage.removeItem('admin'); // erase admin
    localStorage.removeItem('id'); // erase id
    this.isLoggedIn = false;
    this.router.navigate(['/inicio']); // redirect to /inicio
  }

  goToCharacters(): void {
    this.router.navigate(['/personajes']);
  }
}
