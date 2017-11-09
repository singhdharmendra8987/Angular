import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/observable/of";

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable()
export class AuthData {
  private usersData: User[] = [{ name: 'test user', email: 'test123@gmail.com', password: 'test@123' }];

  public logout(): void {
    sessionStorage.removeItem('loggedInUser');
  }

  public getUser(email: string): Observable<User> {
    if (!email) {
      return Observable.of(null);;
    }

    let user = this.usersData.filter((user) => {
      return user.email === email;
    });

    if (!user.length) {
      return Observable.of(null);;
    }

    return Observable.of(user[0]);
  }

  public addUser(user: User): void {
    this.usersData.push({
      name: user.name,
      email: user.email,
      password: user.password
    });

    this.logout();
  }
}
