import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Recipe, Recipes } from './api-tasty';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiTastyServiceService {

  private tastyUrl = 'https://tasty.p.rapidapi.com/';
  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type': 'application/json',
        'Accept': '*/*',
        'X-RapidAPI-Host' : 'tasty.p.rapidapi.com',
        'X-RapidAPI-Key' : '6bdd5e6c6bmsh3f202dea1dddf5bp12f409jsne2460a5232ed',
      })
  };
  constructor(private http: HttpClient) { }
  getRecipes(from : number = 0, size : number = 20, q: String | undefined = undefined): Observable<Recipes> {
    // Testing here
    let requestURL = this.tastyUrl +"recipes/list?from="+from+"&size="+size;
    if(q){
      requestURL+="&q="+q.toLowerCase()
    }
    return this.http.get<Recipes>(requestURL, this.httpOptions);
  }
  getRecipe(id : number): Observable<Recipe>{
    let requestURL = this.tastyUrl + "recipes/get-more-info/?id="+id;
    return this.http.get<Recipe>(requestURL, this.httpOptions);
  }
}
