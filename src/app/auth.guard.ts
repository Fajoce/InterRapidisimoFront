import { CanActivateFn, Router } from '@angular/router';
import { AuthLogService } from './Services/auth-log.service';
import { inject } from '@angular/core';



export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthLogService);
  const router = inject(Router);

  const isLoggedIn = authService.isAuthenticated();

  if (!isLoggedIn) {
    router.navigate(['/login']);
  }

  return isLoggedIn;
};
