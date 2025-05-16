import { Routes } from '@angular/router';
import { ClasesComponent } from './pages/clases/clases.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { OficiosComponent } from './pages/oficios/oficios.component';
import { MapaComponent } from './pages/mapa/mapa.component';
import { MazmorrasComponent } from './pages/mazmorras/mazmorras.component';
import { EquipamientoComponent } from './pages/equipamiento/equipamiento.component';
import { MonturasComponent } from './pages/monturas/monturas.component';
import { MisionesComponent } from './pages/misiones/misiones.component';
import { LogrosComponent } from './pages/logros/logros.component';
import { AlmanaxComponent } from './pages/almanax/almanax.component';
import { BestiarioComponent } from './pages/bestiario/bestiario.component';
import { GuiaComponent } from './pages/guia/guia.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { ClasedetailsComponent } from './pages/clasedetails/clasedetails.component';
import { ClasesadminComponent } from './pages/clasesadmin/clasesadmin.component';
import { RecursosComponent } from './pages/recursos/recursos.component';
import { AdminGuard } from './guards/admin.guard';
import { PersonajesComponent } from './pages/personajes/personajes.component';
import { OficiodetailsComponent } from './pages/oficiodetails/oficiodetails.component';
import { MazmorradetailsComponent } from './pages/mazmorradetails/mazmorradetails.component';
import { PersonajemodelComponent } from './pages/personajemodel/personajemodel.component';
import { EquipamientodetailsComponent } from './pages/equipamientodetails/equipamientodetails.component';
import { RecursodetailsComponent } from './pages/recursodetails/recursodetails.component';
import { BestiadetailsComponent } from './pages/bestiadetails/bestiadetails.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'personajes', component: PersonajesComponent, canActivate: [AuthGuard] },
    { path: 'personajemodel', component: PersonajemodelComponent, canActivate: [AuthGuard] },
    { path: 'clases', component: ClasesComponent, canActivate: [AuthGuard] },
    { path: 'clases/:id', component: ClasedetailsComponent, canActivate: [AuthGuard] },
    { path: 'clasesadmin', component: ClasesadminComponent, canActivate: [AdminGuard] },
    { path: 'oficios', component: OficiosComponent, canActivate: [AuthGuard] },
    { path: 'oficios/:id', component: OficiodetailsComponent, canActivate: [AuthGuard] },
    { path: 'mapa', component: MapaComponent, canActivate: [AuthGuard] },
    { path: 'mazmorras', component: MazmorrasComponent, canActivate: [AuthGuard] },
    { path: 'mazmorras/:id', component: MazmorradetailsComponent, canActivate: [AuthGuard] },
    { path: 'equipamiento', component: EquipamientoComponent, canActivate: [AuthGuard] },
    { path: 'equipamiento/:id', component: EquipamientodetailsComponent, canActivate: [AuthGuard] },
    { path: 'monturas', component: MonturasComponent, canActivate: [AuthGuard] },
    { path: 'misiones', component: MisionesComponent, canActivate: [AuthGuard] },
    { path: 'logros', component: LogrosComponent, canActivate: [AuthGuard] },
    { path: 'almanax', component: AlmanaxComponent, canActivate: [AuthGuard] },
    { path: 'bestiario', component: BestiarioComponent, canActivate: [AuthGuard] },
    { path: 'bestiario/:id', component: BestiadetailsComponent, canActivate: [AuthGuard] },
    { path: 'guia', component: GuiaComponent, canActivate: [AuthGuard] },
    { path: 'recursos', component: RecursosComponent, canActivate: [AuthGuard] },
    { path: 'recursos/:id', component: RecursodetailsComponent, canActivate: [AuthGuard] },
  ];