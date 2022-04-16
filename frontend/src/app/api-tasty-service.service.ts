import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Recipes } from './api-tasty';
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
        'X-RapidAPI-Key' : '3247b8c30bmsh4823d62a21cdc8cp1251a0jsn88afa5b3557c',
      })
  };
  constructor(private http: HttpClient) { }
  
  getRecipes(from : number = 0, size : number = 20): Observable<Recipes> {
    // Testing here
    return this.http.get<Recipes>(this.tastyUrl +"recipes/list?from="+from+"&size="+size, this.httpOptions);
  }
}