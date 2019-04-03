import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:3000/';

export interface User {
  id: number;
  age: number;
  firstName: string;
  lastName: string;
  designation: string;
  address: string;
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${baseUrl}users`);
  }

  getUserDetail(id: string): Observable<User> {
    return this.http.get<User>(`${baseUrl}users/${id}`);
  }

  addUser(user: User): Observable<any> {
    return this.http.post(`${baseUrl}users`, user);
  }
}
