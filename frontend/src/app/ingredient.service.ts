import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Ingredient } from './ingredient';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  private urlIngredient = 'ingredients';

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(environment.url + this.urlIngredient);
  }

  getIngredientById(id: number): Observable<Ingredient> {
    return this.http.get<Ingredient>(
      `${environment.url + this.urlIngredient}/${id}`
    );
  }

  getIngredientByName(name: string): Observable<Ingredient> {
    return this.http.get<Ingredient>(
      `${environment.url + this.urlIngredient}/${name}`
    );
  }

  getIngredientByUserId(userId: number): Observable<Ingredient[]> {
    return this.http.get<Ingredient[]>(
      `${environment.url + this.urlIngredient}/userId=${userId}`
    );
  }

  insertByUserId(
    userId: number,
    ingredient: Ingredient
  ): Observable<Ingredient> {
    return this.http.post<Ingredient>(
      `${environment.url + this.urlIngredient}/userId=${userId}`,
      ingredient
    );
  }

  updateById(
    userId: number,
    ingredient: Ingredient
  ): Observable<Ingredient> {
    return this.http.patch<Ingredient>(
      `${environment.url + this.urlIngredient}/${userId}`,
      ingredient
    );
  }

  deleteByIdAndUserId(userId: number, id: number): Observable<Ingredient> {
    return this.http.delete<Ingredient>(
      `${environment.url + this.urlIngredient}/${userId}/${id}`
    );
  }
}
