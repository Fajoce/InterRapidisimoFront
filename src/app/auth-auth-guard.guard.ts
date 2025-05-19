import { CanActivateFn } from '@angular/router';

export const authAuthGuardGuard: CanActivateFn = (route, state) => {
  return true;
};
