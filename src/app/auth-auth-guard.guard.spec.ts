import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { authAuthGuardGuard } from './auth-auth-guard.guard';

describe('authAuthGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => authAuthGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
