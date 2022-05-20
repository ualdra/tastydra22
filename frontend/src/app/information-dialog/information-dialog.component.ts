import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-information-dialog',
  templateUrl: './information-dialog.component.html',
  styleUrls: ['./information-dialog.component.scss'],
})
export class InformationDialogComponent implements OnInit {
  public title: string;
  public content: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { title: string; content: string }
  ) {
    this.title = data.title;
    this.content = data.content;
  }

  ngOnInit(): void {}
}
