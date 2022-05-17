import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from './recipe';
import { Signin } from './signin';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private urlUser = 'users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(environment.url + this.urlUser);
  }

  login(signin: Signin): Observable<User> {
    return this.http.post<User>(environment.url + this.urlUser + '/login', signin)
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(environment.url + this.urlUser + `/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(environment.url + this.urlUser, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.patch<User>(
      environment.url + this.urlUser + `/${id}`,
      user
    );
  }

  deleteUser(id: number) {
    return this.http.delete(environment.url + this.urlUser + `/${id}`);
  }
}
