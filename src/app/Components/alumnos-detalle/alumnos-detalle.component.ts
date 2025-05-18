import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlumnosService } from '../../Services/alumnos.service';
import { VerAlumnoDTO } from '../../Models/Alumnos/VerAlumnoDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alumnos-detalle',
  imports: [CommonModule],
  templateUrl: './alumnos-detalle.component.html',
  styleUrl: './alumnos-detalle.component.css'
})
export class AlumnosDetalleComponent implements OnInit {
  alumno: VerAlumnoDTO | null = null;

  constructor(
    private alumnoService: AlumnosService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.alumnoService.obtenerAlumnoPorId(id).subscribe({
        next: (data) => this.alumno = data,
        error: (err) => console.error('Error al obtener el alumno', err)
      });
    }
  }

  volver(): void {
    this.router.navigate(['/alumnos']);
  }

}
