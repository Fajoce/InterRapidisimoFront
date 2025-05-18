import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrearGradoDTO, ActualizarGradoDTO, VerGradoDTO } from '../Models/Grados/CrearGradoDTO'

@Injectable({
  providedIn: 'root'
})
export class GradosService {
private apiUrl = 'https://localhost:7030/api/grados'; 

  constructor(private http: HttpClient) {}

  getAll(): Observable<VerGradoDTO[]> {
    return this.http.get<VerGradoDTO[]>(`${this.apiUrl}`);
  }

  getById(id: number): Observable<VerGradoDTO> {
    return this.http.get<VerGradoDTO>(`${this.apiUrl}/${id}`);
  }

  create(grado: CrearGradoDTO): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}`, grado);
  }

  update(grado: ActualizarGradoDTO): Observable<boolean> {
    return this.http.put<boolean>(`${this.apiUrl}/${'update'}`, grado);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
