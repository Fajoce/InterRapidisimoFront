import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  VerMatriculasDTO, CreateMatriculaDTO, ActualizarMatriculaDTO } from '../Models/Matriculas/VerMatriculasDTO'

@Injectable({
  providedIn: 'root'
})
export class MatriculasService {
private apiUrl = 'https://localhost:7030/api/Matriculas';

  constructor(private http: HttpClient) {}

  getAll(): Observable<VerMatriculasDTO[]> {
      const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerMatriculasDTO[]>(this.apiUrl, {headers});
  }

  getById(id: number): Observable<VerMatriculasDTO> {
    return this.http.get<VerMatriculasDTO>(`${this.apiUrl}/${id}`);
  }

  create(matricula: CreateMatriculaDTO): Observable<boolean> {
    return this.http.post<boolean>(this.apiUrl, matricula);
  }

  update(matricula: ActualizarMatriculaDTO): Observable<boolean> {
    return this.http.put<boolean>(this.apiUrl+'/update', matricula);
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
  }
}
