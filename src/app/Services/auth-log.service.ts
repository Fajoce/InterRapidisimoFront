import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

interface JwtPayload {
  nameid: string;         // UsuarioID
  given_name: string;     // Nombre
  email: string;
  role: string;           // Rol (Administrador, Alumno, etc.)
  exp: number;            // Tiempo de expiración
}

@Injectable({
  providedIn: 'root'
})
export class AuthLogService {
  private tokenKey = 'jwt_token';
  private apiUrl = 'https://localhost:7030/Api/Auth'; 

  constructor(private http: HttpClient) {}

  /** Enviar credenciales al backend */
  login(credentials: { email: string; password: string }) {
    return this.http.post<{ token: string }>(`${this.apiUrl}/login`, credentials);
  }

  /** Guardar token en localStorage */
  saveToken(token: string) {
    localStorage.setItem(this.tokenKey, token);
  }

  /** Obtener token del localStorage */
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  /** Decodificar el token JWT */
  getDecodedToken(): JwtPayload | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return jwtDecode<JwtPayload>(token);
    } catch (error) {
      console.error('Token inválido', error);
      return null;
    }
  }

  /** Verifica si hay un token presente (autenticado) */
  isAuthenticated(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const { exp } = jwtDecode<JwtPayload>(token);
      const now = Math.floor(Date.now() / 1000);
      return exp > now; // Verifica si el token no ha expirado
    } catch {
      return false;
    }
  }

  /** Eliminar token del almacenamiento */
  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }

  /** Verificar si el usuario tiene rol "Administrador" */
  isAdmin(): boolean {
    const decoded = this.getDecodedToken();
    return decoded?.role === 'Administrador';
  }

  /** Obtener el ID del usuario logueado */
  getUserId(): number | null {
    const decoded = this.getDecodedToken();
    return decoded ? parseInt(decoded.nameid, 10) : null;
  }

  /** Obtener nombre del usuario */
  getUserName(): string | null {
    return this.getDecodedToken()?.given_name || null;
  }
}
