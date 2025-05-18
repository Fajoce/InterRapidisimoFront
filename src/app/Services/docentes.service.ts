import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerDocentesDTO, CrearDocenteDTO, ActualizarDocenteDTO, GetselectedTeachers } from '../Models/Docentes/CrearDocenteDTO'

@Injectable({
  providedIn: 'root'
})
export class DocentesService {
private apiUrl = 'https://localhost:7030/api/Docentes';

  constructor(private http: HttpClient) {}

  getAll(): Observable<VerDocentesDTO[]> {
  const token = localStorage.getItem('jwt_token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerDocentesDTO[]>(this.apiUrl, {headers});
  }

  getById(id: number): Observable<VerDocentesDTO> {
    debugger;
  const token = localStorage.getItem('jwt_token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
  return this.http.get<VerDocentesDTO>(`${this.apiUrl}/${id}`,{headers});
  }
//
 obtenerUsers(): Observable<GetselectedTeachers[]> {
    return this.http.get<GetselectedTeachers[]>(this.apiUrl+'/SelectedTeachers');
  }
  //
  crear(docente: CrearDocenteDTO): Observable<boolean> {
      const token = localStorage.getItem('jwt_token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.post<boolean>(this.apiUrl, docente, {headers});
  }

  actualizar(docente: ActualizarDocenteDTO): Observable<boolean> {
      const token = localStorage.getItem('jwt_token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.put<boolean>(this.apiUrl+'/update', docente, {headers});
  }

  eliminar(id: number): Observable<boolean> {
      const token = localStorage.getItem('jwt_token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`,{headers});
  }
}
