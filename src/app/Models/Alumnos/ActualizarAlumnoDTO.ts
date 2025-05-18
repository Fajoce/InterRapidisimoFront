export interface ActualizarAlumnoDTO {
  usuarioID: number;
  nombre: string;
  email: string;
  fechaNacimiento: string; // formato YYYY-MM-DD
  direccion: string;
}