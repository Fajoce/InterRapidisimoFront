export interface CrearDocenteDTO {
  usuarioID: number;
  especialidad: string;
  fechaIngreso: Date | null;
}
export interface ActualizarDocenteDTO extends CrearDocenteDTO {
  docenteID: number;
}

export interface VerDocentesDTO {
  docenteID: number;
  usuarioID: number;
  nombreDocente: string;
  especialidad: string;
  fechaIngreso: Date;
}
export interface GetselectedTeachers {
  docenteID: number;
  nombre: string
}