import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../../Services/alumnos.service';
import { VerAlumnoDTO } from '../../Models/Alumnos/VerAlumnoDTO';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { AuthLogService } from '../../Services/auth-log.service';

@Component({
  selector: 'app-alumnos-listar',
  imports: [CommonModule, RouterModule],
  templateUrl: './alumnos-listar.component.html',
  styleUrl: './alumnos-listar.component.css'
})
export class AlumnosListarComponent implements OnInit {
  alumnos: VerAlumnoDTO[] = [];
  esAdmin: boolean = false;

  constructor(
    private alumnosService: AlumnosService,
    public router: Router,
    private authService: AuthLogService
  ) {}

  ngOnInit(): void {
    this.esAdmin = this.authService.isAdmin();
    this.obtenerAlumnos();
  
  }

  obtenerAlumnos(): void {
    this.alumnosService.obtenerAlumnos().subscribe({
      next: (res) => this.alumnos = res,
      error: (err) => console.error('Error al obtener alumnos', err)
    });
  }

  verDetalle(id: number): void {
    this.router.navigate(['/alumnos', id, 'detalle']);
  }

  editar(id: number): void {
    this.router.navigate(['/alumnos', id, 'editar']);
  }

  eliminar(id: number): void {
     this.esAdmin = this.authService.isAdmin();
    if (confirm('¿Estás seguro de eliminar este alumno?')) {
      this.alumnosService.eliminarAlumno(id).subscribe({
        next: () => this.obtenerAlumnos(),
        error: (err) => console.error('Error al eliminar alumno', err)
      });
    }
  }
  crearAlumno(): void {
  this.router.navigate(['/alumnos/crear']);
}
exportarExcel(): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.alumnos);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'Alumnos': worksheet },
      SheetNames: ['Alumnos']
    };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const data: Blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    FileSaver.saveAs(data, `Alumnos_${new Date().toISOString().slice(0,10)}.xlsx`);
  }
}
