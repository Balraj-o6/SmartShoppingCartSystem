import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class Login {

  role = 'customer';

  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  login() {

    this.auth.login(this.role);

    const returnUrl =
      this.route.snapshot
        .queryParamMap
        .get('returnUrl');

    this.router.navigateByUrl(
      returnUrl || '/home'
    );
  }
}