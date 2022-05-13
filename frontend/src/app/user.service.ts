import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'http://localhost:8081/api/';

  private urlUser = 'users';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url + this.urlUser);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(this.url + this.urlUser + `/${id}`);
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>(this.url + this.urlUser, user);
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(this.url + this.urlUser + `/${id}`, user);
  }

  deleteUser(id: number) {
    this.http.delete(this.url + this.urlUser + `/${id}`);
  }

  getRecipesByUserId(id: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url + this.urlUser);
  }

  addRecipeToUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(this.url + this.urlUser + `/${id}`, user);
  }
}
