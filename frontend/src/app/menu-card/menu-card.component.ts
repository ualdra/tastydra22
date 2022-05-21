import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipe';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';
import { MenuData } from '../menu-data';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  editItems = false;
  menuTypes = ["Breakfast", "Lunch", "Dinner"];
  @Input() index?: number;
  menuInfo?: MenuData;
  @Input() listOfRecipes: Recipe[] = [];

  constructor(
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
    var date = new Date();
    date.setDate(date.getDate() + this.index!)
    this.menuInfo = { date: date, type: '', isEdit: true };
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
