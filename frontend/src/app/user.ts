import { Ingredient } from './ingredient';
import { Recipe } from './recipe';

export interface User {
  id: number | null;
  name: string;
  email: string;
  password: string;
  token: string;
  recipes: Recipe[];
  ingredients: Ingredient[];
}
