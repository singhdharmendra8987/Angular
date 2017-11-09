import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { User, AuthData } from '../../services/auth-data.service';

@Component({
  selector: 'registration-form',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  public user: User = {
    name: '',
    email: '',
    password: ''
  };
  public confirmPassword: string = '';

  constructor(private router: Router, private authData: AuthData) {}

  public onSubmit(): void {
    this.authData.addUser(this.user);
    this.router.navigate(['login']);
  }

}
