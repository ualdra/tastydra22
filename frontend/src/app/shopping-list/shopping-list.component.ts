import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public newItem: string = '';

  public listOfShopingItems: ShopingItem[] = [
    {
      id: 1,
      name: 'Butter',
      checked: false,
    },
    {
      id: 2,
      name: 'Bread',
      checked: true,
    },
    {
      id: 3,
      name: 'Eggs - 5',
      checked: false,
    },
    {
      id: 4,
      name: 'Salt',
      checked: false,
    },
  ];

  handleAddItem() {
    if(this.newItem !== ''){
      let newItem: ShopingItem = {
        id: 5,
        name: this.newItem,
        checked: false,
      };
      this.listOfShopingItems.push(newItem);
      this.newItem = '';
    }
  }
}

export interface ShopingItem {
  id: number;
  name: string;
  checked: boolean;
}
