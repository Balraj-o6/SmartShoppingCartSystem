import { inject } from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router
} from '@angular/router';

import { AuthService }
  from '../services/auth';

export const roleGuard: CanActivateFn =
  (route: ActivatedRouteSnapshot) => {

    const auth =
      inject(AuthService);

    const router =
      inject(Router);

    const roles =
      route.data['roles'];

    const role =
      auth.getUserRole();

    if (
      roles.includes(role)
    ) {

      return true;
    }

    router.navigate(['/home']);

    return false;
  };