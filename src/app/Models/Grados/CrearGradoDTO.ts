export interface CrearGradoDTO {
  nombre: string;
  nivel: string;
}

export interface ActualizarGradoDTO {
  gradoID: number;
  nombre: string;
  nivel: string;
}

export interface VerGradoDTO {
  gradoID: number;
  nombre: string;
  nivel: string;
}