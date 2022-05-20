import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { InformationDialogComponent } from '../information-dialog/information-dialog.component';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';
import { User } from '../user';

@Component({
  selector: 'app-recipe-ingredients-card',
  templateUrl: './recipe-ingredients-card.component.html',
  styleUrls: ['./recipe-ingredients-card.component.scss'],
})
export class RecipeIngredientsCardComponent implements OnInit {
  @Input() ingredients: Ingredient[] = [];
  public user$: Observable<User>;
  public user: any;

  constructor(
    private ingredientService: IngredientService,
    private store: Store<{ user: User }>,
    private dialog: MatDialog
  ) {
    this.user$ = this.store.select('user');
    this.user$.subscribe((us) => (this.user = us));
  }

  ngOnInit(): void {}

  addIngredients() {
    if (this.user.id !== null) {
      this.ingredients.forEach((elem, i) => {
        if (elem.isChecked) {
          console.log(elem);
          setTimeout(() => {
            this.ingredientService
              .insertByUserId(this.user.id, elem)
              .subscribe();
          }, i * 300);
        }
      });
      this.ingredients.map((elem, i) => {
        this.ingredients[i].isChecked = false;
      });
      this.dialog.open(InformationDialogComponent, {
        data: {
          title: 'Ingredients',
          content: 'Ingredients have been added correctly',
        },
      });
    } else {
      this.dialog.open(InformationDialogComponent, {
        data: {
          title: 'Warning',
          content: 'Not logged in user cannot have shopping list',
        },
      });
    }
  }

  check(name: string, check: boolean) {
    let index = this.ingredients
      .map((e) => {
        return e.ingredientName;
      })
      .indexOf(name);
    if (index > -1) {
      this.ingredients[index].isChecked = check;
    }
  }
}
