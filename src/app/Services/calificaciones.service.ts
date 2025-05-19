import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateCalificacionDTO, ActualizarCalificacionesDTO, VerCalificacionesDTO } from '../Models/Calificaciones/CreateCalificacionDTO'

@Injectable({
  providedIn: 'root'
})
export class CalificacionesService {
  private apiUrl = 'https://localhost:7030/api/Calificaciones'; // Reemplaza con tu URL real

  constructor(private http: HttpClient) {}

  createCalificacion(dto: CreateCalificacionDTO): Observable<VerCalificacionesDTO> {
           const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.post<VerCalificacionesDTO>(this.apiUrl, dto, {headers});
  }

  updateCalificacion(dto: ActualizarCalificacionesDTO): Observable<VerCalificacionesDTO> {
           const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.put<VerCalificacionesDTO>(`${this.apiUrl}/${dto.CalificacionID}`, dto, {headers});
  }

  deleteCalificacion(id: number): Observable<void> {
           const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.delete<void>(`${this.apiUrl}/${id}`,{headers});
  }

  getCalificaciones(): Observable<VerCalificacionesDTO[]> {
           const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerCalificacionesDTO[]>(this.apiUrl, {headers});
  }

  getCalificacionById(id: number): Observable<VerCalificacionesDTO> {
           const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerCalificacionesDTO>(`${this.apiUrl}/${id}`, {headers});
  }
}

