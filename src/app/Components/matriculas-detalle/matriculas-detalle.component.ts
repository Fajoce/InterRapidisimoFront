import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { MatriculasService } from '../../Services/matriculas.service';
import { VerMatriculasDTO } from '../../Models/Matriculas/VerMatriculasDTO';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-matriculas-detalle',
  imports: [CommonModule],
  templateUrl: './matriculas-detalle.component.html',
  styleUrl: './matriculas-detalle.component.css'
})
export class MatriculasDetalleComponent implements OnInit {
  matricula: VerMatriculasDTO | null = null;
  error: string = '';

  constructor(
    private route: ActivatedRoute,
    private matriculaService: MatriculasService,
    public router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.matriculaService.getById(id).subscribe({
      next: (res) => this.matricula = res,
      error: (err) => {
        this.error = 'Error al cargar la matrícula';
        console.error(err);
      }
    });
  }
// Función para imprimir en PDF
  imprimirPDF(): void {
    const doc = new jsPDF();

    // Título del documento
    doc.setFontSize(18);
    doc.text('Detalle de Matrícula', 14, 20);

    // Datos de la matrícula
   doc.setFontSize(12);
doc.text(`Alumno: ${this.matricula?.nombreAlumno ?? 'No disponible'}`, 14, 30);
doc.text(`Grado: ${this.matricula?.gradoAlumno ?? 'No disponible'}`, 14, 40);
doc.text(`Año Lectivo: ${this.matricula?.anioLectivo ?? 'No disponible'}`, 14, 50);
doc.text(`Fecha de Matrícula: ${this.matricula?.fechaMatricula ?? 'No disponible'}`, 14, 60);
// Fecha y hora de la generación del PDF
      const fechaHora = new Date().toLocaleString();  // Formateamos la fecha y hora actual
      doc.text(`Fecha y hora de generación: ${fechaHora}`, 14, 70); // Agregamos la fecha y hora

    // Genera y muestra el PDF
    doc.save('matricula_detalle.pdf');
  }
}
