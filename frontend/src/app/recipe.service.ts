import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private url = 'http://localhost:8081/api/';

  private urlRecipe = 'recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(this.url + this.urlRecipe);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${this.url + this.urlRecipe}/${id}`);
  }

  getRecipeByMealType(mealType: string): Observable<Recipe> {
    return this.http.get<Recipe>(
      `${this.url + this.urlRecipe}/mealType={${mealType}}`
    );
  }

  updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.put<Recipe>(`${this.url + this.urlRecipe}/${id}`, recipe);
  }

  deleteRecipe(id: number): Observable<Recipe> {
    return this.http.delete<Recipe>(`${this.url + this.urlRecipe}/${id}`);
  }
}
