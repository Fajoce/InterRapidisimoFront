import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerMateriasDTO, CreateMateriasDTO, ActualizarMateriaDTO } from '.././Models/Materia/VerMateriasDTO'

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http:HttpClient) { }
   private apiUrl = 'https://localhost:7030/api/Materias';


  obtenerTodas(): Observable<VerMateriasDTO[]> {
    return this.http.get<VerMateriasDTO[]>(this.apiUrl);
  }

  obtenerPorId(id: number): Observable<VerMateriasDTO> {
    return this.http.get<VerMateriasDTO>(`${this.apiUrl}/${id}`);
  }

  crear(materia: CreateMateriasDTO): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, materia);
  }

  actualizar(materia: ActualizarMateriaDTO): Observable<boolean> {
    return this.http.put<boolean>(this.apiUrl+'/update', materia);
  }

  eliminar(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
