import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatriculasService } from '../../Services/matriculas.service';
import { Router } from '@angular/router';
import { AuthLogService } from '../../Services/auth-log.service';
import { SelectGradosDTO } from '../../Models/Asignaciones/CreateAsignacionDTO';
import { AsignacionesService } from '../../Services/asignaciones.service';
import { CommonModule } from '@angular/common';
import { SelectAlumnosDTO } from '../../Models/Matriculas/VerMatriculasDTO';
import { CreateMatriculaDTO } from '../../Models/Matriculas/VerMatriculasDTO';


@Component({
  selector: 'app-matriculas-crear',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './matriculas-crear.component.html',
  styleUrl: './matriculas-crear.component.css'
})
export class MatriculasCrearComponent implements OnInit {
  matriculaForm!: FormGroup;
  esAdmin: boolean = false;
  gradosDisponibles!: SelectGradosDTO[];
  alumnosDisponibles!: SelectAlumnosDTO[];

  constructor(
    private fb: FormBuilder,
    private matriculaService: MatriculasService,
    public router: Router,
    private authService: AuthLogService,
    private asignacionesService: AsignacionesService
  ) {}

  ngOnInit(): void {
     this.esAdmin = this.authService.isAdmin();
    this.matriculaForm = this.fb.group({
      alumnoID: ['', Validators.required],
      gradoID: ['', Validators.required],
      anioLectivo: ['', [Validators.required, Validators.min(2000)]],
      fechaMatricula: ['', Validators.required]
    });
     this.asignacionesService.obtenerGrados().subscribe({
      next: (grados) => (this.gradosDisponibles= grados),
      error: (err) => console.error('Error al cargar grados disponibles', err),
    });
       this.matriculaService.getAllStudents().subscribe({
      next: (students) => (this.alumnosDisponibles= students),
      error: (err) => console.error('Error al cargar students disponibles', err),
    });
  }

  onSubmit(): void {
    if (this.matriculaForm.valid) {
       const nuevamateria: CreateMatriculaDTO = this.matriculaForm.value;
      this.matriculaService.create(nuevamateria).subscribe({
        next: () => {
          alert('Matrícula registrada correctamente');
          this.router.navigate(['/matriculas']);
        },
        error: err => {
          console.error(err);
          alert('Error al registrar la matrícula');
        }
      });
    }
  }

}
