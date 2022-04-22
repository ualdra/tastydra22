import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../api-tasty';

@Component({
  selector: 'app-recipe-card-detail',
  templateUrl: './recipe-card-detail.component.html',
  styleUrls: ['./recipe-card-detail.component.scss']
})
export class RecipeCardDetailComponent implements OnInit {
  @Input() recipe : Recipe | undefined; 


  constructor() { }

  ngOnInit(): void {
  }

}
