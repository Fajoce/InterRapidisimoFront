import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AlumnosService } from '../../Services/alumnos.service';
import { Alumno } from '../../Models/Alumnos/Alumno';
import { CommonModule } from '@angular/common';
import { GetUsuariosDTO } from '../../Models/Alumnos/GetUsuariosDTO';
import { AuthLogService } from '../../Services/auth-log.service';

@Component({
  selector: 'app-alumnos-crear',
  imports: [CommonModule, ReactiveFormsModule,RouterModule],
  templateUrl: './alumnos-crear.component.html',
  styleUrl: './alumnos-crear.component.css'
})
export class AlumnosCrearComponent {
alumnoForm!: FormGroup;
usuariosDisponibles: GetUsuariosDTO[] = [];
esAdmin: boolean = false;

constructor(
    private fb: FormBuilder,
    private alumnosService: AlumnosService,
    public router: Router,
    private authService: AuthLogService
  ) {}

  ngOnInit(): void {
    this.esAdmin = this.authService.isAdmin();
    this.alumnoForm = this.fb.group({
      usuarioID: ['', Validators.required],
      fechaNacimiento: [''],
      direccion: ['', Validators.required]
    });
    this.alumnosService.obtenerUsers().subscribe({
      next: (usuarios) => this.usuariosDisponibles = usuarios,
      error: (err) => console.error('Error al cargar usuarios disponibles', err)
    });
  }


  onSubmit(): void {
    if (this.alumnoForm.valid) {
      const nuevoAlumno: Alumno = this.alumnoForm.value;
      this.alumnosService.crearAlumno(nuevoAlumno).subscribe({
        next: () => {
          alert('Alumno creado exitosamente');
          this.router.navigate(['/alumnos']);
        },
        error: (err) => {
          alert('Error al crear alumno');
          console.error(err);
        }
      });
    }
  }
  cancelar(): void {
  this.router.navigate(['/alumnos']);
}
}
