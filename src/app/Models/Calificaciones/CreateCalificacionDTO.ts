export interface CreateCalificacionDTO {
  MatriculaID: number;
  AsignacionID: number;
  Nota: number;
  FechaRegistro?: Date;
  Observacion?: string;
}

export interface ActualizarCalificacionesDTO {
  CalificacionID: number;
  MatriculaID: number;
  AsignacionID: number;
  Nota: number;
  FechaRegistro?: Date;
  Observacion?: string;
}

export interface VerCalificacionesDTO {
  calificacionID: number;
  matriculaID: number;
  asignacionID: number;
  nota: number;
  fechaRegistro?: Date;
  observacion?: string;
}