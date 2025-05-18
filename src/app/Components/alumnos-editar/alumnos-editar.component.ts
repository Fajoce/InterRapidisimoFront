import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AlumnosService } from '../../Services/alumnos.service';
import { ActualizarAlumnoDTO } from '../../Models/Alumnos/ActualizarAlumnoDTO';
import { VerAlumnoDTO } from '../../Models/Alumnos/VerAlumnoDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumnos-editar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alumnos-editar.component.html',
  styleUrl: './alumnos-editar.component.css'
})
export class AlumnosEditarComponent implements OnInit {
  alumnoForm!: FormGroup;
  alumnoId!: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private alumnoService: AlumnosService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.alumnoId = +this.route.snapshot.paramMap.get('id')!;
    this.initForm();
    this.cargarDatos();
  }

  initForm(): void {
    this.alumnoForm = this.fb.group({
      usuarioID: ['', Validators.required],
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      fechaNacimiento: [''],
      direccion: ['', Validators.required]
    });
  }

  cargarDatos(): void {
    this.alumnoService.obtenerAlumnoPorId(this.alumnoId).subscribe({
      next: (alumno: VerAlumnoDTO) => {
        this.alumnoForm.patchValue({
          usuarioID: alumno.usuarioID,
          nombre: alumno.alumnoNombre,
          email: alumno.alumnoEmail,
          fechaNacimiento: alumno.fechaNacimiento ? alumno.fechaNacimiento.toString().split('T')[0] : '',
          direccion: alumno.direccion
        });
      },
      error: (err) => {
        alert('Error al cargar los datos del alumno');
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    if (this.alumnoForm.valid) {
      const alumnoEditado: ActualizarAlumnoDTO = this.alumnoForm.value;
      this.alumnoService.actualizarAlumno(alumnoEditado).subscribe({
        next: () => {
          alert('Alumno actualizado correctamente');
          this.router.navigate(['/alumnos']);
        },
        error: (err) => {
          alert('Error al actualizar alumno');
          console.error(err);
        }
      });
    }
  }

  cancelar(): void {
    this.router.navigate(['/alumnos']);
  }

}
