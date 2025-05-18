export interface VerMatriculasDTO {
  matriculaID: number;
  alumnoID: number;
  nombreAlumno: string;
  gradoID: number;
  gradoAlumno: string;
  anioLectivo: number;
  fechaMatricula: Date;
}

export interface CreateMatriculaDTO {
  alumnoID: number;
  gradoID: number;
  anioLectivo: number;
  fechaMatricula: Date;
}

export interface ActualizarMatriculaDTO {
  matriculaID: number;
  alumnoID: number;
  gradoID: number;
  anioLectivo: number;
  fechaMatricula: Date;
}