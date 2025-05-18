import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  CreateAsignacionDTO,
  VerAsignacionDTO,
  ActualizarAsignacionDTO,
  SelectGradosDTO,
  SelectMateriasDTO,
  SelectDocentesDTO,
} from '../Models/Asignaciones/CreateAsignacionDTO';

@Injectable({
  providedIn: 'root',
})
export class AsignacionesService {
  private apiUrl = 'https://localhost:7030/api/Asignaciones';

  constructor(private http: HttpClient) {}

  obtenerTodas(): Observable<VerAsignacionDTO[]> {
    const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<VerAsignacionDTO[]>(this.apiUrl, { headers });
  }
  ////
  obtenerGrados(): Observable<SelectGradosDTO[]> {
    const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<SelectGradosDTO[]>(this.apiUrl + '/Grados', {
      headers,
    });
  }
  ///
  obtenerMaterias(): Observable<SelectMateriasDTO[]> {
    const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<SelectMateriasDTO[]>(this.apiUrl + '/Materias', {
      headers,
    });
  }
  ////
  obtenerDocentess(): Observable<SelectDocentesDTO[]> {
    const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<SelectDocentesDTO[]>(this.apiUrl + '/Docentes', {
      headers,
    });
  }

  obtenerPorId(id: number): Observable<VerAsignacionDTO> {
    return this.http.get<VerAsignacionDTO>(`${this.apiUrl}/${id}`);
  }

  crear(asignacion: CreateAsignacionDTO): Observable<VerAsignacionDTO> {
    const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.post<VerAsignacionDTO>(this.apiUrl, asignacion, {
      headers,
    });
  }

  actualizar(
    asignacion: ActualizarAsignacionDTO
  ): Observable<VerAsignacionDTO> {
    return this.http.put<VerAsignacionDTO>(
      `${this.apiUrl}/${asignacion.asignacionID}/${'update'}`,
      asignacion
    );
  }

  eliminar(id: number): Observable<void> {
    const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.delete<void>(`${this.apiUrl}/${id}`, {headers});
  }
}
