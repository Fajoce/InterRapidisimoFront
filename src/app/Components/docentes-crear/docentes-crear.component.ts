import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DocentesService } from '../../Services/docentes.service';
import { CrearDocenteDTO } from '../../Models/Docentes/CrearDocenteDTO';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { GetselectedTeachers } from '../../Models/Docentes/CrearDocenteDTO';

@Component({
  selector: 'app-docentes-crear',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './docentes-crear.component.html',
  styleUrl: './docentes-crear.component.css'
})
export class DocentesCrearComponent {
docenteForm: FormGroup;
docentesDisponibles: GetselectedTeachers[] = [];

  constructor(
    private fb: FormBuilder,
    private docenteService: DocentesService,
    private router: Router
  ) {
    this.docenteForm = this.fb.group({
      usuarioID: ['', Validators.required],
      especialidad: ['', Validators.required],
      fechaIngreso: [null]
    });
  }

  ngOnInit(){
     this.docenteService.obtenerUsers().subscribe({
      next: (docentes) => this.docentesDisponibles = docentes,
      error: (err) => console.error('Error al cargar docentes disponibles', err)
    });
  }
  onSubmit(): void {
    if (this.docenteForm.valid) {
      const nuevoDocente: CrearDocenteDTO = this.docenteForm.value;

      this.docenteService.crear(nuevoDocente).subscribe({
        next: () => {
          alert('Docente creado exitosamente');
          this.router.navigate(['/docentes']);
        },
        error: (err) => {
          alert('Error al crear el docente');
          console.error(err);
        }
      });
    }
  }
    cancelar(): void {
  this.router.navigate(['/docentes']);
}
}
