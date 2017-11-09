import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthData } from '../../services/auth-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public userName: string;
  public password: string;

  public returnUrl: string;
  public errorMessage: string;

  constructor(
    private authData: AuthData,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (sessionStorage.getItem('loggedInUser')) {
      this.router.navigate(['home']);
    }

    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  public login(): void {

    let user = this.authData.getUser(this.userName).subscribe((resp) => {
      if (resp && resp.password === this.password) {
        sessionStorage.setItem('loggedInUser', this.userName);
        this.router.navigate([this.returnUrl]);
      } else {
        this.password = '';
        this.errorMessage = 'Incorrect user name or password';
      }
    });

  }
}
