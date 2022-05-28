import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Ingredient } from '../ingredient';
import { IngredientService } from '../ingredient.service';
import { User } from '../user';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  public user$: Observable<User>;
  public user: any;
  public newItem: string = '';
  public listOfIngredient: Ingredient[] = [];
  public text: string = '';

  constructor(
    private store: Store<{ user: User }>,
    private ingredientService: IngredientService
  ) {
    this.user$ = this.store.select('user');
    this.user$.subscribe((us) => (this.user = us));
    this.refresh();
  }

  ngOnInit(): void {}

  handleAddItem() {
    if (this.newItem !== '') {
      let newItem: Ingredient = {
        id: null,
        ingredientName: this.newItem,
        isChecked: false,
      };
      this.ingredientService.insertByUserId(1, newItem).subscribe(() => {
        this.refresh();
      });
      this.newItem = '';
    }
  }

  check(id: any, name: string, check: boolean) {
    this.ingredientService
      .updateById(id, { id: id, ingredientName: name, isChecked: check })
      .subscribe(() => {
        this.refresh();
      });
  }

  delete(id: any) {
    this.ingredientService
      .deleteByIdAndUserId(this.user.id, id)
      .subscribe(() => {
        this.refresh();
      });
  }

  refresh() {
    if (this.user?.id !== null) {
      this.ingredientService
        .getIngredientByUserId(this.user?.id)
        .subscribe((ingredients: Ingredient[]) => {
          this.listOfIngredient = [];
          this.listOfIngredient.push(...ingredients);
          if (this.listOfIngredient.length === 0) {
            this.text = 'You have no ingredients';
          }else{
            this.text = "";
          }
        });
    } else {
      this.text = 'Log in to access shopping list';
    }
  }
}
