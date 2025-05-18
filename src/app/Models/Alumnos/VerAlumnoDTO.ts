export interface VerAlumnoDTO {
  alumnoID: number;
  usuarioID: number;
  alumnoNombre: string;
  alumnoEmail: string;
  fechaNacimiento?: Date;
  direccion: string;
  gradoID: number,
  gradoNombre:string
}