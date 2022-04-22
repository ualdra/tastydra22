import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from '../api-tasty';
import { ApiTastyServiceService } from '../api-tasty-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  id: number | undefined;
  recipe: Recipe | undefined
  ingredients: string[] =[]
  constructor(
    private route: ActivatedRoute,
    private  apiTastyServiceService : ApiTastyServiceService
    ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
     let param =  params.get('id')
     if(param)
      this.id = parseInt(param);
      this.getInfo();
      
    })

    
  }
  getInfo(){
    if(this.id) this.apiTastyServiceService.getRecipe(this.id)
      .subscribe(data => {
        this.recipe = data
        data.sections.forEach(data => data.components.forEach(data=> this.ingredients.push(data.ingredient.display_singular)))
        console.log(this.recipe)
      })
  }
}
