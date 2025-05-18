import { Component, OnInit } from '@angular/core';
import { GradosService } from '../../Services/grados.service';
import { VerGradoDTO } from '../../Models/Grados/CrearGradoDTO';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-grados',
  imports: [RouterLink, CommonModule],
  templateUrl: './listar-grados.component.html',
  styleUrl: './listar-grados.component.css'
})
export class ListarGradosComponent implements OnInit {
  grados: VerGradoDTO[] = [];

  constructor(private gradoService: GradosService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.cargarGrados();
  }

  cargarGrados() {
    this.gradoService.getAll().subscribe((data) => {
      this.grados = data;
    });
  }

  eliminar(id: number) {
    if (confirm('¿Eliminar grado?')) {
      this.gradoService.delete(id).subscribe(() => {
        this.cargarGrados();
      });
    }
  }
  crearGrado(): void {
  this.router.navigate(['/grados/crear']);
}
}
