import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AsignacionesService } from '../../Services/asignaciones.service';
import { Router } from '@angular/router';
import { CreateAsignacionDTO } from '../../Models/Asignaciones/CreateAsignacionDTO';
import { SelectGradosDTO } from '../../Models/Asignaciones/CreateAsignacionDTO';
import { SelectMateriasDTO } from '../../Models/Asignaciones/CreateAsignacionDTO';
import { SelectDocentesDTO } from '../../Models/Asignaciones/CreateAsignacionDTO';

@Component({
  selector: 'app-crear-asignacion',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './crear-asignacion.component.html',
  styleUrl: './crear-asignacion.component.css',
})
export class CrearAsignacionComponent {
  gradosDisponibles!: SelectGradosDTO[];
  materiasDisponibles!: SelectMateriasDTO[];
  docentesDisponibles!: SelectDocentesDTO[];

  private fb = inject(FormBuilder);
  private asignacionesService = inject(AsignacionesService);
  private router = inject(Router);

  form: FormGroup = this.fb.group({
    docenteID: [null, Validators.required],
    materiaID: [null, Validators.required],
    gradoID: [null, Validators.required],
  });
  ngOnInit() {
    this.asignacionesService.obtenerGrados().subscribe({
      next: (grados) => (this.gradosDisponibles = grados),
      error: (err) => console.error('Error al cargar grados disponibles', err),
    });
    this.asignacionesService.obtenerMaterias().subscribe({
      next: (materias) => (this.materiasDisponibles = materias),
      error: (err) => console.error('Error al cargar grados disponibles', err),
    });
      this.asignacionesService.obtenerDocentess().subscribe({
      next: (materias) => (this.docentesDisponibles = materias),
      error: (err) => console.error('Error al cargar docentes disponibles', err),
    });
  }
  onSubmit(): void {
    if (this.form.invalid) return;

  const nuevaAsignacion: CreateAsignacionDTO = this.form.value;

  this.asignacionesService.crear(nuevaAsignacion).subscribe(
    (success) => {
      if (success) {
        alert('Asignación creada con éxito');
        this.router.navigate(['/asignaciones']); // Ajusta según tu ruta
      } else {
        alert('Error: Esta asignación ya existe. No se puede duplicar.');
      }
    },
    (error) => {
      console.error('Error en la solicitud', error);
      alert('No se puede asignar la misma materia al mismo docente o No se pueden asignar mas de tres materias al mismo docente');
    }
  );
}
      cancelar(): void {
  this.router.navigate(['/asignaciones']);
}
}
