import { Component, OnInit } from '@angular/core';
import { CalificacionesService } from '../../Services/calificaciones.service';
import { VerCalificacionesDTO, ActualizarCalificacionesDTO } from '../../Models/Calificaciones/CreateCalificacionDTO'
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthLogService } from '../../Services/auth-log.service';

@Component({
  selector: 'app-listar-calificaciones',
  imports: [CommonModule, RouterLink],
  templateUrl: './listar-calificaciones.component.html',
  styleUrl: './listar-calificaciones.component.css'
})
export class ListarCalificacionesComponent implements OnInit {
  calificaciones: VerCalificacionesDTO[] = [];
  modoEditar: boolean = false;
  esAdmin: any;

  constructor(private calificacionesService: CalificacionesService, 
    private authService: AuthLogService,
    public router: Router
  ) {}

  ngOnInit(): void {
      this.esAdmin = this.authService.isAdmin();
      this.obtenerCalificaciones();
    
    }
  
    obtenerCalificaciones(): void {
      this.calificacionesService.getCalificaciones().subscribe({
        next: (res) => this.calificaciones = res,
        error: (err) => console.error('Error al obtener calificaciones', err)
      });
    }
  
    verDetalle(id: number): void {
      this.router.navigate(['/calificaciones', id, 'detalle']);
    }
  
    editar(id: number): void {
      this.router.navigate(['/calificaciones', id, 'editar']);
    }
  
    eliminar(id: number): void {
       this.esAdmin = this.authService.isAdmin();
      if (confirm('¿Estás seguro de eliminar esta calificacion?')) {
        this.calificacionesService.deleteCalificacion(id).subscribe({
          next: () => this.obtenerCalificaciones(),
          error: (err) => console.error('Error al eliminar calificacion', err)
        });
      }
    }
    crearAlumno(): void {
    this.router.navigate(['/alumnos/crear']);
  }
  }
  