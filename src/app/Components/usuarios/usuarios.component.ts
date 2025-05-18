import { Component } from '@angular/core';
import { Usuario } from '../../Models/Usuarios';
import { UsuariosService } from '../../Services/usuarios.service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Route,Router } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent {
   registerForm!: FormGroup;

  constructor(private service: UsuariosService,
    private fb: FormBuilder, private router:Router )
    {  this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordHash: ['', [Validators.required, Validators.minLength(6)]],
      rol: ['Alumno', Validators.required]
    });}
onSubmit(): void {
    if (this.registerForm.valid) {
      const usuario: Usuario = this.registerForm.value;

      this.service.register(usuario).subscribe({
        next: (response) => {
          alert('Usuario registrado exitosamente');
          this.registerForm.reset(); // Limpia el formulario
          this.router.navigate(['/login']);
        },
        error: (error) => {
          alert('Error al registrar usuario');
          console.error(error);
        }
      });
    }
  }
  goToLogin() {
  this.router.navigate(['/login']); // Regresa al login
}
}
