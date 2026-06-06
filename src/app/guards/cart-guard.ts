import { inject } from '@angular/core';

import {
  CanActivateFn,
  Router
} from '@angular/router';

import { CartService }
  from '../services/cart';

export const cartGuard: CanActivateFn =
  () => {

    const cart =
      inject(CartService);

    const router =
      inject(Router);

    if (
      cart.getCartCount() > 0
    ) {

      return true;
    }

    alert(
      'Cart is Empty'
    );

    router.navigate(['/cart']);

    return false;
  };