import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MateriaService } from '../../Services/materia.service';
import { VerMateriasDTO } from '../../Models/Materia/VerMateriasDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materia-detalle',
  imports: [CommonModule],
  templateUrl: './materia-detalle.component.html',
  styleUrl: './materia-detalle.component.css'
})
export class MateriaDetalleComponent implements OnInit {
  materia: VerMateriasDTO | null = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private materiaService: MateriaService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (isNaN(id)) {
      this.error = 'ID inválido';
      return;
    }

    this.materiaService.obtenerPorId(id).subscribe({
      next: (res) => this.materia = res,
      error: (err) => {
        console.error(err);
        this.error = 'Error al obtener los datos de la materia.';
      }
    });
  }

}
