import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';
import { MenuData } from '../menu-data';
import { ApiTastyServiceService } from '../api-tasty-service.service';
import { Recipe as TastyRecipe } from '../api-tasty';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss'],
  providers: [DatePipe]
})
export class MenuCardComponent implements OnInit {
  editItems = false;
  @Input() index?: number;
  menuInfo?: MenuData;

  @Input() listOfRecipes: Recipe[] = [];
  dayRecipes?: Recipe[];

  breakfastRecipes?: TastyRecipe[] = [];
  lunchRecipes?: TastyRecipe[] = [];
  dinnerRecipes?: TastyRecipe[] = [];

  constructor(
    public dialog: MatDialog,
    private tastyService: ApiTastyServiceService,
    private router: Router,
    private datepipe: DatePipe
  ) { }

  ngOnInit(): void {
    var date = new Date();
    date.setDate(date.getDate() + this.index!)
    this.menuInfo = { date: date, type: '', isEdit: true };
    // WARNING, DATES CAN HAVE DIFFERENT FORMATS
    this.dayRecipes = this.listOfRecipes.filter( recipe => recipe.date.toString().substring(0,10) === this.datepipe.transform(this.menuInfo?.date, 'yyyy-MM-dd'));
    this.clasifier();
  }

  clasifier(): void {
    for (let recipe of this.dayRecipes!) {
      if (recipe.mealType === "Breakfast") {
        this.tastyService.getRecipe(recipe.mealId).subscribe( tastyRecipe => {
          this.breakfastRecipes?.push(tastyRecipe);
        })
      } else if (recipe.mealType === "Lunch") {
        this.tastyService.getRecipe(recipe.mealId).subscribe( tastyRecipe => {
          this.lunchRecipes?.push(tastyRecipe);
        })
      } else {
        this.tastyService.getRecipe(recipe.mealId).subscribe( tastyRecipe => {
          this.dinnerRecipes?.push(tastyRecipe);
        })
      }
    }
  }

  openRecipe(recipe: TastyRecipe) {
    if (this.editItems) return;
    this.router.navigate(['/recipe/'+recipe.id]);
  }

  add(): void {
    if (this.editItems) return;
    this.router.navigate(['/recipes']);
  }

  openDialog(): void {

    if(this.editItems){
    const dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '500px',
      data: {
        isEdit: true,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.menuInfo = {
          date: result.date,
          type: result.type,
          isEdit: result.isEdit,
        };
      }
    });
  }
}

}
