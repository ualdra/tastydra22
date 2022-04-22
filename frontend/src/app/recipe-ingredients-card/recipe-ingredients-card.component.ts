import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-ingredients-card',
  templateUrl: './recipe-ingredients-card.component.html',
  styleUrls: ['./recipe-ingredients-card.component.scss']
})
export class RecipeIngredientsCardComponent implements OnInit {
  ingredients: string[] = ["Milk", "Sugar", "Chocolate", "Flour", "Cinnamon", "Butter"];

  constructor() { }

  ngOnInit(): void {
  }

}
