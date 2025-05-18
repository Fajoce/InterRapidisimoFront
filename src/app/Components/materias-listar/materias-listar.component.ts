import { Component, OnInit } from '@angular/core';
import { MateriaService } from '../../Services/materia.service';
import { VerMateriasDTO } from '../../Models/Materia/VerMateriasDTO';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-materias-listar',
  imports: [CommonModule, RouterLink],
  templateUrl: './materias-listar.component.html',
  styleUrl: './materias-listar.component.css'
})
export class MateriasListarComponent implements OnInit {
  materias: VerMateriasDTO[] = [];

  constructor(
    private materiaService: MateriaService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.cargarMaterias();
  }

  cargarMaterias(): void {
    this.materiaService.obtenerTodas().subscribe({
      next: (data) => this.materias = data,
      error: (err) => console.error('Error al cargar materias', err)
    });
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar esta materia?')) {
      this.materiaService.eliminar(id).subscribe({
        next: () => {
          alert('Materia eliminada');
          this.cargarMaterias();
        },
        error: () => alert('Error al eliminar la materia')
      });
    }
  }

}
