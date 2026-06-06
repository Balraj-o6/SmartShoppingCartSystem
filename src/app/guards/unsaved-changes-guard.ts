import {
  CanDeactivateFn
}
  from '@angular/router';

import {
  CanComponentDeactivate
}
  from '../models/can-deactivate';

export const
  unsavedChangesGuard:
    CanDeactivateFn<
      CanComponentDeactivate
    > = component => {

      return component
        .canDeactivate
        ? component.canDeactivate()
        : true;
    };