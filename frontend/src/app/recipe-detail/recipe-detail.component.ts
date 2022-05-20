import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from '../api-tasty';
import { ApiTastyServiceService } from '../api-tasty-service.service';
import { Ingredient } from '../ingredient';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  id: number | undefined;
  recipe: Recipe | undefined;
  ingredients: Ingredient[] = [];
  constructor(
    private route: ActivatedRoute,
    private apiTastyServiceService: ApiTastyServiceService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let param = params.get('id');
      if (param) this.id = parseInt(param);
      this.getInfo();
    });
  }
  getInfo() {
    if (this.id)
      this.apiTastyServiceService.getRecipe(this.id).subscribe((data) => {
        this.recipe = data;
        data.sections.forEach((data) =>
          data.components.forEach((data) => {
            let ingredient: Ingredient = {
              id: null,
              ingredientName: data.ingredient.display_singular,
              isChecked: false,
            };
            this.ingredients.push(ingredient);
          })
        );
        console.log(this.recipe);
      });
  }
}
