import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../api-tasty';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';
import { MenuData } from '../menu-data';

@Component({
  selector: 'app-recipe-card-detail',
  templateUrl: './recipe-card-detail.component.html',
  styleUrls: ['./recipe-card-detail.component.scss'],
})
export class RecipeCardDetailComponent implements OnInit {
  @Input() recipe: Recipe | undefined;
  menuInfo?: MenuData;

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialog(): void {
    const dialogRef = this.dialog.open(RecipeDialogComponent, {
      width: '500px',
      data: this.menuInfo,
    });

    dialogRef.afterClosed().subscribe((result) => {
      // this.menuInfo = {
      //   date: result.dateSelected,
      //   type: result.typeSelected,
      // };
      // console.log('The dialog was closed: ' + this.menuInfo.type);
      console.log('The dialog was closed: ');
    });
  }
}
