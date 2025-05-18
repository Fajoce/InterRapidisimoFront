import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { DocentesService } from '../../Services/docentes.service';
import { VerDocentesDTO } from '../../Models/Docentes/CrearDocenteDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docentes-detalle',
  imports: [CommonModule],
  templateUrl: './docentes-detalle.component.html',
  styleUrl: './docentes-detalle.component.css'
})
export class DocentesDetalleComponent implements OnInit {
  docente!: VerDocentesDTO;
   error: string | null = null; 

  constructor(
    private docenteService: DocentesService,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  if (!id || isNaN(id)) {
    this.error = 'ID inválido';
    return;
  }

  this.docenteService.getById(id).subscribe({
    next: (res) => {
      this.docente = res;
   
    },
    error: (err) => {
      console.error('Error al obtener el docente:', err);
      this.error = 'No se pudo cargar la información del docente. Intenta nuevamente más tarde.';
    }
  });

}
}
    
