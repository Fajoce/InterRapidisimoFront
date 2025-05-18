import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GradosService } from '../../Services/grados.service';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-grado',
  templateUrl: './crear-grado.component.html',
  imports: [ReactiveFormsModule,RouterModule, CommonModule],
})
export class CrearGradoComponent implements OnInit {
  gradoForm!: FormGroup<{
    nombre: FormControl<string>;
    nivel: FormControl<string>;
  }>;

  constructor(
    private fb: FormBuilder,
    private gradoService: GradosService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.gradoForm = this.fb.group({
      nombre: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(3)],
        nonNullable: true
      }),
      nivel: this.fb.control('', {
        validators: [Validators.required],
        nonNullable: true
      })
    });
  }

  onSubmit() {
    if (this.gradoForm.invalid) {
      this.gradoForm.markAllAsTouched();
      return;
    }

    this.gradoService.create(this.gradoForm.getRawValue()).subscribe(() => {
      this.router.navigate(['/grados']);
    });
  }
}