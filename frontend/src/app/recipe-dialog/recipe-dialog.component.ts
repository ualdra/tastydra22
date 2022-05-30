import { NumberSymbol } from '@angular/common';
import { Component, OnInit, Inject, Injectable } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Recipe } from '../recipe';
import { MenuData } from '../menu-data';
import { RecipeService } from '../recipe.service';
import { User } from '../user';
import { UserService } from '../user.service';
import { AddRecipeService } from '../add-recipe.service';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss'],
})

export class RecipeDialogComponent implements OnInit {
  idRecipe : number = -1;
  mealRecipe : number = -1;
  dateSelected: Date = new Date();
  types: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  typeSelected: string = '';
  isEdit = false;
  public user$: Observable<User>;
  public user: any;

  constructor(
    public dialogRef: MatDialogRef<RecipeDialogComponent>,
    private recipeService : RecipeService,
    private store: Store<{ user: User }>,
    private addRecipe: AddRecipeService,
    @Inject(MAT_DIALOG_DATA) public data: any
      ) {
        this.user$ = this.store.select('user');
        this.user$.subscribe((us) => {
          (this.user = us)
        });
    this.isEdit = data.isEdit;
    this.idRecipe =  data.recipe?.id;
    this.mealRecipe = data.mealRecipe.id
    if(this.addRecipe.date && this.addRecipe.type){
      this.dateSelected = this.addRecipe.date!;
      this.typeSelected = this.addRecipe.type!.toString(); 
      
    }
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.user.id, this.idRecipe).subscribe( () => {
      this.dialogRef.close(null);
    })
  }

  onSave(): void {
    // Reset Service
    this.addRecipe.type = undefined;
    this.addRecipe.date = undefined;

    let menuInfo: MenuData = {
      date: this.dateSelected,
      type: this.typeSelected,
      isEdit: this.isEdit,
    };

    let recipe: Recipe = {
      mealId: this.mealRecipe,
      date: this.dateSelected,
      mealType: this.typeSelected,
      id: this.idRecipe
    };

    if (this.isEdit) {
      this.recipeService.updateRecipe(recipe.id??0, recipe).subscribe(
        () => {
          this.dialogRef.close(menuInfo);
        }
      );
    } else {
      this.recipeService.addRecipeToUser(this.user.id, recipe).subscribe(
        () => {
          this.dialogRef.close(menuInfo);
        }
      );
    }

  }
}
