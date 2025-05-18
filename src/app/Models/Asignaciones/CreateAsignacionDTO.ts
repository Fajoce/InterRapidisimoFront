export interface CreateAsignacionDTO {
  docenteID: number;
  materiaID: number;
  gradoID: number;
}
export interface VerAsignacionDTO {
  asignacionID: number;
  nombreDocente: string;
  docenteID: number;
  nombreMateria: string;
  materiaID: number;
  nombreGrado: string;
  gradoID: number;
}
export interface ActualizarAsignacionDTO {
  asignacionID: number;
  docenteID: number;
  materiaID: number;
  gradoID: number;
}
export interface SelectGradosDTO {
  gradoID: number;
  nombre: string
}
export interface SelectMateriasDTO {
  materiaID: number;
  nombre: string
}
export interface SelectDocentesDTO {
  docenteID: number;
  nombre: string
}