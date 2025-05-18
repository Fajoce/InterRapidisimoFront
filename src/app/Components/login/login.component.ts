import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthLogService } from '../../Services/auth-log.service';
import { Router } from '@angular/router';
import { CommonModule, NgFor, NgIf } from '@angular/common';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {
loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthLogService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
goToRegister() {
  this.router.navigate(['/register']);
}
  onSubmit(): void {
    if (this.loginForm.invalid) return;
     console.log('Formulario enviado', this.loginForm.value); // Verifica que se ejecuta

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.authService.saveToken(res.token);
        const decoded = this.authService.getDecodedToken();
    if (decoded?.nameid) {
      localStorage.setItem('usuarioID', decoded.nameid);
    }
        this.router.navigate(['/dashboard']);
      },
      error: () => {
        this.errorMessage = 'Credenciales incorrectas';
      }
    });
  }
}
