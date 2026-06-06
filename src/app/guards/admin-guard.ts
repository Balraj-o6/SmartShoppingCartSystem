import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import { AuthService }
  from '../services/auth';

export const adminGuard: CanActivateFn =
  () => {

    const auth =
      inject(AuthService);

    const router =
      inject(Router);

    if (!auth.isLoggedIn()) {

      router.navigate(['/login']);

      return false;
    }

    if (auth.getUserRole() === 'admin') {

      return true;
    }

    alert(
      'Admin Access Required'
    );

    router.navigate(['/home']);

    return false;
  };