import { Injectable } from '@angular/core';
import { Usuario } from '../Models/Usuarios';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Datosusuario } from '../Models/Datosusuario';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  private apiUrl = 'https://localhost:7030/Api/Usuarios'; 

  constructor(private http:HttpClient) { }

  register(usuario: Usuario): Observable<any> {
  return this.http.post(`${this.apiUrl}`, usuario);
}
getUsuarioById(id: number): Observable<Datosusuario> {
  return this.http.get<Datosusuario>(`${this.apiUrl}/${id}`);
}
}
