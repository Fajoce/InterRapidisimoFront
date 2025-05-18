import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { GradosService } from '../../Services/grados.service';
import { ActualizarGradoDTO } from '../../Models/Grados/CrearGradoDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-editar-grado',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './editar-grado.component.html',
  styleUrl: './editar-grado.component.css'
})
export class EditarGradoComponent implements OnInit {
  gradoForm!: FormGroup<{
    gradoID: FormControl<number>;
    nombre: FormControl<string>;
    nivel: FormControl<string>;
  }>;
  gradoID!: number;

  constructor(
    private fb: FormBuilder,
    private gradoService: GradosService,
    public router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtener el ID del grado desde la URL
    this.gradoID = Number(this.activatedRoute.snapshot.paramMap.get('id'));

    this.gradoForm = this.fb.group({
      gradoID: this.fb.control(this.gradoID, {
        validators: [Validators.required],
        nonNullable: true
      }),
      nombre: this.fb.control('', {
        validators: [Validators.required, Validators.minLength(3)],
        nonNullable: true
      }),
      nivel: this.fb.control('', {
        validators: [Validators.required],
        nonNullable: true
      })
    });

    // Obtener el grado y establecer los valores en el formulario
    this.gradoService.getById(this.gradoID).subscribe((grado: ActualizarGradoDTO) => {
      this.gradoForm.patchValue(grado);
    });
  }

  onSubmit() {
    debugger;
    if (this.gradoForm.invalid) {
      this.gradoForm.markAllAsTouched();
      return;
    }

    this.gradoService.update(this.gradoForm.getRawValue()).subscribe(() => {
      this.router.navigate(['/grados']);
    });
  }

}
