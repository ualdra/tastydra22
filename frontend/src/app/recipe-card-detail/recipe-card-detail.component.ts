import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../api-tasty';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';
import { MenuData } from '../menu-data';
import { User } from '../user';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-card-detail',
  templateUrl: './recipe-card-detail.component.html',
  styleUrls: ['./recipe-card-detail.component.scss'],
})
export class RecipeCardDetailComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  menuInfo?: MenuData = { date: new Date(), type: '', isEdit: false };
  public user$: Observable<User> | undefined;
  public user: any;

  constructor(
    public dialog: MatDialog,
    private store: Store<{ user: User }>,
    private route : Router,
    ) {
      this.user$ = this.store.select('user');
      this.user$.subscribe((us) => {
        (this.user = us)
      });
    }

  ngOnInit(): void {}

  openDialog(): void {
    if(this.user.id == null ) {
      this.route.navigate(['login']);
      return;
    }
    const dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '500px',
      data: {
        isEdit: false,
        mealRecipe:this.recipe
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
