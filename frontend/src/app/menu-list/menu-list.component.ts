import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuCardComponent } from '../menu-card/menu-card.component';
import { Recipe } from '../recipe';
import { RecipeService } from '../recipe.service';
import { User } from '../user';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  public user$: Observable<User>;
  public user: any;
  listOfRecipes: Recipe[] = [];
  text: string = '';
  @ViewChildren(MenuCardComponent) menuCards?: QueryList<MenuCardComponent>;
  refreshing: Boolean = false;

  constructor(
    private store: Store<{ user: User }>,
    private recipeService: RecipeService
  ) {
    this.user$ = this.store.select('user');
    this.user$.subscribe((us) => {
      this.user = us;
      this.getUserRecipes();
    });
  }

  ngOnInit(): void {
  }

  refresh(): void {
    this.refreshing = true;
    this.getUserRecipes();
  }

  getUserRecipes(){
    if (this.user?.id !== null) {
      this.recipeService
        .getRecipesByUserId(this.user?.id)
        .subscribe((recipes: Recipe[]) => {
          this.listOfRecipes = [];
          this.listOfRecipes = recipes;
          if (this.listOfRecipes.length === 0) {
            this.text = 'You have no menus';
          }else{
            this.text = "";
          }
          if (this.refreshing) {
            for (let menuCard of this.menuCards!) {
              menuCard.reset();
            };
            this.refreshing = false;
          }
        });
    } else {
      this.text = 'Log in to access the menu';
    }
  }
}
