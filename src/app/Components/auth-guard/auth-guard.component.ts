import { Component } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthLogService } from '../../Services/auth-log.service';

@Component({
  selector: 'app-auth-guard',
  imports: [],
  templateUrl: './auth-guard.component.html',
  styleUrl: './auth-guard.component.css'
})
export class AuthGuardComponent implements CanActivate {
  constructor(private authService: AuthLogService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']); // Redirige a login si no está autenticado
      return false;
    }
  }

}
