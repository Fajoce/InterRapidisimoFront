import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatriculasService } from '../../Services/matriculas.service';
import { Router } from '@angular/router';
import { AuthLogService } from '../../Services/auth-log.service';

@Component({
  selector: 'app-matriculas-crear',
  imports: [ReactiveFormsModule],
  templateUrl: './matriculas-crear.component.html',
  styleUrl: './matriculas-crear.component.css'
})
export class MatriculasCrearComponent implements OnInit {
  matriculaForm!: FormGroup;
  esAdmin: boolean = false;

  constructor(
    private fb: FormBuilder,
    private matriculaService: MatriculasService,
    public router: Router,
    private authService: AuthLogService
  ) {}

  ngOnInit(): void {
     this.esAdmin = this.authService.isAdmin();
    this.matriculaForm = this.fb.group({
      alumnoID: ['', Validators.required],
      gradoID: ['', Validators.required],
      anioLectivo: ['', [Validators.required, Validators.min(2000)]],
      fechaMatricula: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.matriculaForm.valid) {
      this.matriculaService.create(this.matriculaForm.value).subscribe({
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
