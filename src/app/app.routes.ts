import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { LogOutComponent } from './Components/log-out/log-out.component';
import { authGuard } from './auth.guard';
import { UsuariosComponent } from './Components/usuarios/usuarios.component';
import { UsuarioDetalleComponent } from './Components/usuario-detalle/usuario-detalle.component';
import { AlumnosListarComponent } from './Components/alumnos-listar/alumnos-listar.component';
import { AlumnosCrearComponent } from './Components/alumnos-crear/alumnos-crear.component';
import { AlumnosEditarComponent } from './Components/alumnos-editar/alumnos-editar.component';
import { AlumnosDetalleComponent } from './Components/alumnos-detalle/alumnos-detalle.component';
import { DocentesListarComponent } from './Components/docentes-listar/docentes-listar.component';
import { DocentesCrearComponent } from './Components/docentes-crear/docentes-crear.component';
import { DocentesEditarComponent } from './Components/docentes-editar/docentes-editar.component';
import { DocentesDetalleComponent } from './Components/docentes-detalle/docentes-detalle.component';
import { MateriasListarComponent } from './Components/materias-listar/materias-listar.component';
import { MateriasCrearComponent } from './Components/materias-crear/materias-crear.component';
import { MateriaEditarComponent } from './Components/materia-editar/materia-editar.component';
import { MateriaDetalleComponent } from './Components/materia-detalle/materia-detalle.component';
import { MatriculasListarComponent } from './Components/matriculas-listar/matriculas-listar.component';
import { MatriculasCrearComponent } from './Components/matriculas-crear/matriculas-crear.component';
import { MatriculasDetalleComponent } from './Components/matriculas-detalle/matriculas-detalle.component';
import { ListarGradosComponent } from './Components/listar-grados/listar-grados.component';
import { CrearGradoComponent } from './Components/crear-grado/crear-grado.component';
import { EditarGradoComponent } from './Components/editar-grado/editar-grado.component';
import { VerAsignacionesComponent } from './Components/ver-asignaciones/ver-asignaciones.component';
import { CrearAsignacionComponent } from './Components/crear-asignacion/crear-asignacion.component';
import { ListarCalificacionesComponent } from './Components/listar-calificaciones/listar-calificaciones.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [authGuard],
  },
  { path: 'register', component: UsuariosComponent },
  { path: 'usuario/detalle', component: UsuarioDetalleComponent },
  { path: 'alumnos', component: AlumnosListarComponent },
  { path: 'alumnos/crear', component: AlumnosCrearComponent },
  { path: 'alumnos/:id/editar', component: AlumnosEditarComponent },
  { path: 'alumnos/detalle/:id', component: AlumnosDetalleComponent },
  { path: 'docentes', component: DocentesListarComponent },
  { path: 'docentes/crear', component: DocentesCrearComponent },
  { path: 'docentes/:id/editar', component: DocentesEditarComponent },
  { path: 'docentes/detalle/:id', component: DocentesDetalleComponent },
  { path: 'materias', component: MateriasListarComponent },
  { path: 'materias/crear', component: MateriasCrearComponent },
  { path: 'materias/:id/editar', component: MateriaEditarComponent },
  { path: 'materias/detalle/:id', component: MateriaDetalleComponent },
  { path: 'matriculas', component: MatriculasListarComponent },
  { path: 'matriculas/crear', component: MatriculasCrearComponent },
  { path: 'matriculas/detalle/:id', component: MatriculasDetalleComponent },
  { path: 'grados', component: ListarGradosComponent },
  { path: 'grados/crear', component: CrearGradoComponent },
  { path: 'grados/:id/editar', component: EditarGradoComponent },
  { path: 'asignaciones', component: VerAsignacionesComponent },
  { path: 'asignaciones/crear', component: CrearAsignacionComponent },
  { path: 'calificaciones', component: ListarCalificacionesComponent },
   { path: 'calificaciones/crear', component: ListarCalificacionesComponent },
  { path: 'logout', component: LogOutComponent },
];
