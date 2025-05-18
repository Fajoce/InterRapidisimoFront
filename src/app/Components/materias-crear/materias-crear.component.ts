import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MateriaService } from '../../Services/materia.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

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
      name: ['', [Validators.required]]
    });
  }

  onSubmit(): void {
    debugger
    if (this.materiaForm.valid) {
      this.materiaService.crear(this.materiaForm.value).subscribe({
        next: () => {
          alert('Materia creada correctamente');
          this.router.navigate(['/materias']);
        },
        error: (err) => {
          alert('Error al crear materia'+ err);
        }
      });
    }
  }

}
