import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { DocentesService } from '../../Services/docentes.service';
import { VerDocentesDTO, ActualizarDocenteDTO } from '../../Models/Docentes/CrearDocenteDTO'
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-docentes-editar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './docentes-editar.component.html',
  styleUrl: './docentes-editar.component.css'
})
export class DocentesEditarComponent implements OnInit {
  docenteForm: FormGroup;
  docenteID!: number;
  docente: VerDocentesDTO | null = null;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private docenteService: DocentesService,
    private router: Router
  ) {
    this.docenteForm = this.fb.group({
      usuarioID: ['', Validators.required],
      especialidad: ['', Validators.required],
      fechaIngreso: [null]
    });
  }

  ngOnInit(): void {
    this.docenteID = Number(this.route.snapshot.paramMap.get('id'));
    this.cargarDocente();
  }

  cargarDocente(): void {
    this.docenteService.getById(this.docenteID).subscribe({
      next: (data) => {
        this.docente = data;
        this.docenteForm.patchValue({
          usuarioID: data.usuarioID,
          especialidad: data.especialidad,
          fechaIngreso: data.fechaIngreso
        });
      },
      error: (err) => {
        alert('Error al cargar los datos del docente');
        console.error(err);
      }
    });
  }

  onSubmit(): void {
    if (this.docenteForm.valid && this.docente) {
      const docenteEditado: ActualizarDocenteDTO = {
        docenteID: this.docente.docenteID,
        usuarioID: this.docenteForm.value.usuarioID,
        especialidad: this.docenteForm.value.especialidad,
        fechaIngreso: this.docenteForm.value.fechaIngreso
      };

      this.docenteService.actualizar(docenteEditado).subscribe({
        next: () => {
          alert('Docente actualizado correctamente');
          this.router.navigate(['/docentes']);
        },
        error: (err) => {
          alert('Error al actualizar el docente');
          console.error(err);
        }
      });
    }
  }
    cancelar(): void {
    this.router.navigate(['/docentes']);
  }

}
