import { Component } from '@angular/core';
import { AuthLogService } from '../../Services/auth-log.service';
import { UsuariosService } from '../../Services/usuarios.service';
import { Datosusuario } from '../../Models/Datosusuario';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detalle',
  imports: [CommonModule],
  templateUrl: './usuario-detalle.component.html',
  styleUrl: './usuario-detalle.component.css'
})
export class UsuarioDetalleComponent {
   usuario: Datosusuario | null = null;
constructor(
    private usuarioService: UsuariosService,
    private authService: AuthLogService,
    private router:Router
  ) {}

  ngOnInit(): void {
    const decoded = this.authService.getDecodedToken();
    const id = localStorage.getItem('usuarioID');

    if (id) {
      this.usuarioService.getUsuarioById(+id).subscribe({
        next: (res) => {
          console.log('Respuesta de la API:', res);
          this.usuario = res;
        },
        error: (err) => {
          console.error('Error al obtener el usuario:', err);
        }
      });
    } else {
      console.error('ID no encontrado en localStorage');
    }
  }
  volverAlMenu(): void {
  this.router.navigate(['/dashboard']); // Cambia '/dashboard' por la ruta de tu menú principal
}
}
