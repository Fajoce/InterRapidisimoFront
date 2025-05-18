import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MateriaService } from '../../Services/materia.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateMateriasDTO } from '../../Models/Materia/VerMateriasDTO';

@Component({
  selector: 'app-materias-crear',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './materias-crear.component.html',
  styleUrl: './materias-crear.component.css'
})
export class MateriasCrearComponent implements OnInit {
  materiaForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private materiaService: MateriaService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.materiaForm = this.fb.group({
      Nombre: ['', [Validators.required, Validators.minLength(7)]]
    });
  }

  onSubmit(): void {
    debugger
    if (this.materiaForm.valid) {
       const nuevamateria: CreateMateriasDTO = this.materiaForm.value;
      this.materiaService.crear(nuevamateria).subscribe({
        next: () => {
          alert('Materia creada correctamente');
          this.router.navigate(['/materias']);
        },
        error: (err) => {
          if (err.status === 400 && err.error?.errors) {
            console.log(this.materiaForm.value)
      const errores = err.error.errors;
      console.error('Errores de validación:', errores);
          alert('Error al crear materia: ' + JSON.stringify(err.error));
                } else {
      console.error('Otro error:', err);
    }
    }});
    }
  }

}
