import { Component, OnInit } from '@angular/core';
import { DocentesService } from '../../Services/docentes.service';
import { VerDocentesDTO } from '../../Models/Docentes/CrearDocenteDTO';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthLogService } from '../../Services/auth-log.service';

@Component({
  selector: 'app-docentes-listar',
  imports: [CommonModule, RouterModule],
  templateUrl: './docentes-listar.component.html',
  styleUrl: './docentes-listar.component.css'
})
export class DocentesListarComponent implements OnInit {
  docentes: VerDocentesDTO[] = [];
  esAdmin: boolean = false;
  constructor(
    private docenteService: DocentesService,
    public router: Router,
    private authService: AuthLogService
  ) {}

  ngOnInit(): void {
     this.esAdmin = this.authService.isAdmin();
    this.obtenerDocentes();
  }

  obtenerDocentes(): void {
    this.docenteService.getAll().subscribe({
      next: (data) => {
        this.docentes = data;
      },
      error: (err) => {
        console.error('Error al obtener docentes:', err);
      }
    });
  }

  eliminarDocente(id: number): void {
    if (confirm('¿Estás seguro de eliminar este docente?')) {
      this.docenteService.eliminar(id).subscribe({
        next: () => {
          this.obtenerDocentes(); // recarga la lista
        },
        error: (err) => {
          alert('Error al eliminar docente');
          console.error(err);
        }
      });
    }
  }

  irADetalle(id: number): void {
    this.router.navigate(['/docentes/detalle', id]);
  }

  irAEditar(id: number): void {
    this.router.navigate(['/docentes', id, 'editar']);
  }
  crearDocente(): void {
  this.router.navigate(['/docentes/crear']);
}
verDetalle(id: number): void {
  this.router.navigate([`/docentes/detalle/${id}`]);
}

}
