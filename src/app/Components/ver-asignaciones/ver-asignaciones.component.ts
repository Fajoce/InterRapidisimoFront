import { Component, inject } from '@angular/core';
import { AsignacionesService } from '../../Services/asignaciones.service';
import { VerAsignacionDTO } from '../../Models/Asignaciones/CreateAsignacionDTO';
import { CommonModule } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-ver-asignaciones',
  imports: [CommonModule],
  templateUrl: './ver-asignaciones.component.html',
  styleUrl: './ver-asignaciones.component.css'
})
export class VerAsignacionesComponent {
private asignacionesService = inject(AsignacionesService);
  asignaciones: VerAsignacionDTO[] = [];

  constructor(public router: Router,) {    
    this.cargarAsignaciones();
  }

  cargarAsignaciones(): void {
    this.asignacionesService.obtenerTodas().subscribe((data) => {
      this.asignaciones = data;
    });
  }

  eliminarAsignacion(id: number): void {
    this.asignacionesService.eliminar(id).subscribe(() => {
      this.cargarAsignaciones();
    });
  }
    crearAsignaciones(): void {
  this.router.navigate(['/asignaciones/crear']);
}
}
