import { Component, OnInit } from '@angular/core';
import { MatriculasService } from '../../Services/matriculas.service';
import { VerMatriculasDTO } from '../../Models/Matriculas/VerMatriculasDTO';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthLogService } from '../../Services/auth-log.service';

@Component({
  selector: 'app-matriculas-listar',
  imports: [CommonModule, RouterLink],
  templateUrl: './matriculas-listar.component.html',
  styleUrl: './matriculas-listar.component.css'
})
export class MatriculasListarComponent implements OnInit {
  matriculas: VerMatriculasDTO[] = [];
  error = '';
  esAdmin: boolean = false;

  constructor(
    private matriculaService: MatriculasService,
    public router: Router,
    private authService:AuthLogService
  ) {}

  ngOnInit(): void {
       this.esAdmin = this.authService.isAdmin();
    this.cargarMatriculas();
  }

  cargarMatriculas(): void {
    this.matriculaService.getAll().subscribe({
      next: (data) => this.matriculas = data,
      error: (err) => this.error = 'Error al cargar las matrículas'
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/matriculas/detalle', id]);
  }

  editar(id: number): void {
    this.router.navigate(['/matriculas/editar', id]);
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta matrícula?')) {
      this.matriculaService.delete(id).subscribe({
        next: () => {
          alert('Matrícula eliminada correctamente');
          this.cargarMatriculas();
        },
        error: () => alert('Error al eliminar la matrícula')
      });
    }
  }

}
