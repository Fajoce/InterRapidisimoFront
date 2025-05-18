export interface Usuario {
  usuarioID: number,
  nombre: string;
  email: string;
  passwordHash: string;
  rol: 'Alumno' | 'Docente'; 
}