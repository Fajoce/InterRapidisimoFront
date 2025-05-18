import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  VerMatriculasDTO, CreateMatriculaDTO, ActualizarMatriculaDTO, SelectAlumnosDTO } from '../Models/Matriculas/VerMatriculasDTO'

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

    getAllStudents(): Observable<SelectAlumnosDTO[]> {
      const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<SelectAlumnosDTO[]>(this.apiUrl+'/Alumnos', {headers});
  }

  getById(id: number): Observable<VerMatriculasDTO> {
          const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerMatriculasDTO>(`${this.apiUrl}/${id}`,{headers});
  }

  create(matricula: CreateMatriculaDTO): Observable<boolean> {
          const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.post<boolean>(this.apiUrl, matricula,{headers});
  }

  update(matricula: ActualizarMatriculaDTO): Observable<boolean> {
          const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.put<boolean>(this.apiUrl+'/update', matricula,{headers});
  }

  delete(id: number): Observable<boolean> {
          const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`,{headers});
  }
}
