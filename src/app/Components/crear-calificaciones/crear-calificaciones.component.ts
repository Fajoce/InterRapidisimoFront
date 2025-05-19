import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CreateCalificacionDTO } from '../../Models/Calificaciones/CreateCalificacionDTO';
import { CalificacionesService } from '../../Services/calificaciones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-calificaciones',
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './crear-calificaciones.component.html',
  styleUrl: './crear-calificaciones.component.css'
})
export class CrearCalificaciones implements OnInit {
  calificacionForm!: FormGroup;
  mensaje: string | null = null;

  constructor(
    private fb: FormBuilder,
    private calificacionesService: CalificacionesService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.calificacionForm = this.fb.group({
      MatriculaID: [null, [Validators.required, Validators.min(1)]],
      AsignacionID: [null, [Validators.required, Validators.min(1)]],
      Nota: [null, [Validators.required, Validators.min(0), Validators.max(20)]],
      Observacion: ['']
    });
  }

  onSubmit(): void {
    if (this.calificacionForm.invalid) return;
const calificacionNueva: CreateCalificacionDTO = this.calificacionForm.value;
    this.calificacionesService.createCalificacion(this.calificacionForm.value).subscribe({
      next: () => {
        this.mensaje = '✅ Calificación creada con éxito.';
        this.calificacionForm.reset();
        this.calificacionForm.markAsPristine();
      },
      error: () => {
        this.mensaje = '❌ Error al crear la calificación.';
      }
    });
  }

  get f() {
    return this.calificacionForm.controls;
  }

}
