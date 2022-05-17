import { Component, OnInit } from '@angular/core';
import { Recipe } from '../api-tasty';
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
  constructor(public dialog: MatDialog) { }
  menuTypes = ["Breakfast", "Lunch", "Dinner"];
  menuInfo?: MenuData = { date: new Date(), type: '', isEdit: true };

  ngOnInit(): void {
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
