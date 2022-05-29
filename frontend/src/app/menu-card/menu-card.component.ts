import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
import { AddRecipeService } from '../add-recipe.service';

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

  breakfastRecipes: {tastyRecipe:TastyRecipe, backendRecipe: Recipe}[] = [];
  lunchRecipes: {tastyRecipe:TastyRecipe, backendRecipe: Recipe}[] = [];
  dinnerRecipes: {tastyRecipe:TastyRecipe, backendRecipe: Recipe}[] = [];

  @Output() refresh: EventEmitter<String> = new EventEmitter();
  iterableDiffer: any;

  constructor(
    public dialog: MatDialog,
    private tastyService: ApiTastyServiceService,
    private router: Router,
    private datepipe: DatePipe,
    private addRecipe: AddRecipeService
  ) {}

  ngOnInit(): void {
    var date = new Date();
    date.setDate(date.getDate() + this.index!)
    this.menuInfo = { date: date, type: '', isEdit: true };
    this.clasifier();
  }

  reset(): void {
    this.breakfastRecipes = [];
    this.lunchRecipes = [];
    this.dinnerRecipes = [];
    setTimeout(() => {this.clasifier()}, 1000);
  }

  clasifier(): void {
    // WARNING, DATES CAN HAVE DIFFERENT FORMATS
    this.dayRecipes = this.listOfRecipes.filter( recipe => recipe.date.toString().substring(0,10) === this.datepipe.transform(this.menuInfo?.date, 'yyyy-MM-dd'));

    for (let recipe of this.dayRecipes!) {
      if (recipe.mealType === "Breakfast") {
        this.tastyService.getRecipe(recipe.mealId).subscribe( tastyRecipe => {
          this.breakfastRecipes?.push({tastyRecipe, backendRecipe: recipe});
        })
      } else if (recipe.mealType === "Lunch") {
        this.tastyService.getRecipe(recipe.mealId).subscribe( tastyRecipe => {
          this.lunchRecipes?.push({tastyRecipe, backendRecipe: recipe});
        })
      } else {
        this.tastyService.getRecipe(recipe.mealId).subscribe( tastyRecipe => {
          this.dinnerRecipes?.push({tastyRecipe, backendRecipe: recipe});
        })
      }
    }
  }

  openRecipe(recipe: TastyRecipe) {
    if (this.editItems) return;
    this.router.navigate(['/recipe/'+recipe.id]);
  }

  add(type: String, date: Date): void {
    if (this.editItems) return;
    this.addRecipe.date = date;
    this.addRecipe.type = type;
    this.router.navigate(['/recipes']);
  }

  openDialog(tastyRecipe: TastyRecipe, backendRecipe: Recipe): void {

    if(this.editItems){
    const dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '500px',
      data: {
        isEdit: true,
        recipe: backendRecipe,
        mealRecipe: tastyRecipe
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === undefined) return;
      if (result !== null) {
        this.menuInfo = {
          date: result.date,
          type: result.type,
          isEdit: result.isEdit,
        };
      }
      this.refresh.emit();
    });
  }
}

}
