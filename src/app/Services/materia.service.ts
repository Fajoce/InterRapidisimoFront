import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VerMateriasDTO, CreateMateriasDTO, ActualizarMateriaDTO } from '.././Models/Materia/VerMateriasDTO'

@Injectable({
  providedIn: 'root'
})
export class MateriaService {

  constructor(private http:HttpClient) { }
   private apiUrl = 'https://localhost:7030/api/Materias';


  obtenerTodas(): Observable<VerMateriasDTO[]> {
             const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerMateriasDTO[]>(this.apiUrl, {headers});
  }

  obtenerPorId(id: number): Observable<VerMateriasDTO> {
             const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.get<VerMateriasDTO>(`${this.apiUrl}/${id}`,{headers});
  }

  crear(materia: CreateMateriasDTO): Observable<boolean> {
             const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.post<boolean>(this.apiUrl,materia, {headers});
  }

  actualizar(materia: ActualizarMateriaDTO): Observable<boolean> {
             const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.put<boolean>(this.apiUrl+'/update', materia, {headers});
  }

  eliminar(id: number): Observable<boolean> {
             const token = localStorage.getItem('jwt_token');
    const headers = new HttpHeaders({
    Authorization: `Bearer ${token}`
  });
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`, {headers});
  }
}
