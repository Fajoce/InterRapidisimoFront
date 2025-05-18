import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../Models/Alumnos/Alumno';
import { VerAlumnoDTO } from '../Models/Alumnos/VerAlumnoDTO'; 
import { ActualizarAlumnoDTO } from '../Models/Alumnos/ActualizarAlumnoDTO';
import { GetUsuariosDTO } from '../Models/Alumnos/GetUsuariosDTO';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {
private apiUrl = 'https://localhost:7030/api/Alumnos';
  constructor(private http: HttpClient) {}

  crearAlumno(alumno: Alumno): Observable<boolean> {
      const token = localStorage.getItem('jwt_token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.post<boolean>(`${this.apiUrl}`, alumno, { headers });
  }

  obtenerAlumnos(): Observable<VerAlumnoDTO[]> {
      const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerAlumnoDTO[]>(this.apiUrl, {headers});
  }
 obtenerUsers(): Observable<GetUsuariosDTO[]> {
    return this.http.get<GetUsuariosDTO[]>(this.apiUrl+'/Usuarios');
  }
  obtenerAlumnoPorId(id: number): Observable<VerAlumnoDTO> {
     const token = localStorage.getItem('jwt_token');
      const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerAlumnoDTO>(`${this.apiUrl}/${id}`,{headers});
  }

  actualizarAlumno(alumno: ActualizarAlumnoDTO): Observable<boolean> {
          const token = localStorage.getItem('jwt_token');

  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.put<boolean>(`${this.apiUrl}/update`, alumno, { headers });
  }

  eliminarAlumno(id: number): Observable<boolean> {
  debugger;
  const token = localStorage.getItem('jwt_token');
  const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`);
    
  }
}
