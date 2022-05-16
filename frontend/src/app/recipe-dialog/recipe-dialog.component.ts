import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { MenuData } from '../menu-data';

@Component({
  selector: 'app-recipe-dialog',
  templateUrl: './recipe-dialog.component.html',
  styleUrls: ['./recipe-dialog.component.scss'],
})
export class RecipeDialogComponent implements OnInit {
  dateSelected: Date = new Date();
  types: string[] = ['Breakfast', 'Lunch', 'Dinner'];
  typeSelected: string = '';
  isEdit= false;

  constructor(
    public dialogRef: MatDialogRef<RecipeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuData
  ) {
    this.isEdit = data.isEdit;
   }

  ngOnInit(): void {}

  onCancel(): void {
    this.dialogRef.close();
  }
}
