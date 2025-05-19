import { Component, OnInit } from '@angular/core';
import { CalificacionesService } from '../../Services/calificaciones.service';
import { VerCalificacionesDTO, ActualizarCalificacionesDTO } from '../../Models/Calificaciones/CreateCalificacionDTO'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listar-calificaciones',
  imports: [CommonModule],
  templateUrl: './listar-calificaciones.component.html',
  styleUrl: './listar-calificaciones.component.css'
})
export class ListarCalificacionesComponent implements OnInit {
  calificaciones: VerCalificacionesDTO[] = [];
  calificacionSeleccionada: VerCalificacionesDTO | null = null;
  modoEditar: boolean = false;

  constructor(private calificacionesService: CalificacionesService) {}

  ngOnInit(): void {
    this.cargarCalificaciones();
  }

  cargarCalificaciones(): void {
    this.calificacionesService.getCalificaciones().subscribe(data => {
      this.calificaciones = data;
      console.log(data)
    });
  }

  ver(calificacion: VerCalificacionesDTO): void {
    this.calificacionSeleccionada = calificacion;
    this.modoEditar = false;
  }

  editar(calificacion: VerCalificacionesDTO): void {
    this.calificacionSeleccionada = { ...calificacion };
    this.modoEditar = true;
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de que quieres eliminar esta calificación?')) {
      this.calificacionesService.deleteCalificacion(id).subscribe(() => {
        this.cargarCalificaciones();
        this.calificacionSeleccionada = null;
        this.modoEditar = false;
      });
    }
  }

  refrescar(): void {
    this.modoEditar = false;
    this.cargarCalificaciones();
  }
}