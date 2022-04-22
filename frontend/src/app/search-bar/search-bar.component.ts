import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Output() searchRecipe = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addNewItem(value: string) {
    this.searchRecipe.emit(value);
  }
}
