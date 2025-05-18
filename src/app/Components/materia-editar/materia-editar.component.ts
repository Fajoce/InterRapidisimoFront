import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterModule } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MateriaService } from '../../Services/materia.service';
import { ActualizarMateriaDTO } from '../../Models/Materia/VerMateriasDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materia-editar',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './materia-editar.component.html',
  styleUrl: './materia-editar.component.css'
})
export class MateriaEditarComponent implements OnInit {
  materiaForm!: FormGroup;
  materiaId!: number;

  constructor(
    public route: ActivatedRoute,
    private fb: FormBuilder,
    private materiaService: MateriaService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.materiaId = Number(this.route.snapshot.paramMap.get('id'));
    this.materiaService.obtenerPorId(this.materiaId).subscribe({
      next: (materia) => {
        this.materiaForm = this.fb.group({
          materiaID: [materia.materiaID],
          nombre: [materia.nombre, Validators.required]
        });
      },
      error: () => {
        alert('Error al cargar la materia');
        this.router.navigate(['/materias']);
      }
    });
  }

  onSubmit(): void {
    if (this.materiaForm.valid) {
      const materiaEditada: ActualizarMateriaDTO = this.materiaForm.value;
      this.materiaService.actualizar(materiaEditada).subscribe({
        next: () => {
          alert('Materia actualizada correctamente');
          this.router.navigate(['/materias']);
        },
        error: (err) => {
          console.error(err);
          alert('Error al actualizar la materia');
        }
      });
    }
  }

}
