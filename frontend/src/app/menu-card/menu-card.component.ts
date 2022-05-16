import { Component, OnInit } from '@angular/core';
import { Recipe } from '../api-tasty';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { RecipeDialogComponent } from '../recipe-dialog/recipe-dialog.component';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent implements OnInit {
  editItems = false;
  constructor(public dialog: MatDialog) { }
  menuTypes = ["Breakfast", "Lunch", "Dinner"];

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
      // this.menuInfo = {
      //   date: result.dateSelected,
      //   type: result.typeSelected,
      // };
      // console.log('The dialog was closed: ' + this.menuInfo.type);
      console.log('The dialog was closed: ');
    });
  }
}

}
