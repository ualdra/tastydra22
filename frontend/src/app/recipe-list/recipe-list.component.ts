import { Component, OnInit } from '@angular/core';
import { Recipes } from '../api-tasty';
import { ApiTastyServiceService } from '../api-tasty-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  numberOfRecipes = 20;
  recipes: Recipes | undefined
  constructor(private apiTastyServiceService: ApiTastyServiceService) { }
  searchRecipe : String | undefined;

  addItem(newItem: string) {
    this.searchRecipe = newItem;
    console.log(newItem)
    this.numberOfRecipes = 20;
    this.apiTastyServiceService.getRecipes(0, this.numberOfRecipes, newItem).subscribe(data => this.recipes = data);
  }
  ngOnInit(): void {
    this.apiTastyServiceService.getRecipes(0, this.numberOfRecipes).subscribe(data => this.recipes = data);
   /* window.addEventListener('scroll', () => {
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var complete = true;
      const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
      if (this.recipes != undefined && ((scrollTop / height)) > 0.99 && this.numberOfRecipes < this.recipes?.count && complete) {
        complete = false;
        this.apiTastyServiceService.getRecipes(this.numberOfRecipes-1, 20, this.searchRecipe)
          .subscribe(data => {
            if (this.recipes?.results != undefined) {
              data.results.forEach(recipe => this.recipes?.results.push(recipe))
              //this.recipes.results.concat(data.results);
              console.log(this.recipes.results)
              complete = true;
            }
          });
        this.numberOfRecipes += 20;
      }
    });*/
  }

}
