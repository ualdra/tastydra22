import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recipe } from './recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  private urlRecipe = 'recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(environment.url + this.urlRecipe);
  }

  getRecipe(id: number): Observable<Recipe> {
    return this.http.get<Recipe>(`${environment.url + this.urlRecipe}/${id}`);
  }

  getRecipeByMealType(mealType: string): Observable<Recipe> {
    return this.http.get<Recipe>(
      `${environment.url + this.urlRecipe}/mealType=${mealType}`
    );
  }

  updateRecipe(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.patch<Recipe>(
      `${environment.url + this.urlRecipe}/${id}`,
      recipe
    );
  }

  deleteRecipe(idUser: number, idRecipe: number) {
    return this.http.delete<Recipe>(
      `${environment.url + this.urlRecipe}/${idUser}/${idRecipe}`
    );
  }

  addRecipeToUser(id: number, recipe: Recipe): Observable<Recipe> {
    return this.http.post<Recipe>(
      environment.url + this.urlRecipe + `/userId=${id}`,
      recipe
    );
  }

  getRecipesByUserId(id: number): Observable<Recipe[]> {
    return this.http.get<Recipe[]>(
      environment.url + this.urlRecipe + `/userId=${id}`
    );
  }
}
