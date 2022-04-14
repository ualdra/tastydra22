import { Component, OnInit } from "@angular/core";
import {FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-search-by-categories',
  templateUrl: './search-by-categories.component.html',
  styleUrls: ['./search-by-categories.component.scss']
})
export class SearchByCategoriesComponent implements OnInit {

  dropdownList: Array<any> = [];
  dropdownSettings: any;
  form = new FormGroup({});
  ShowFilter = false;

  //constructor(public formBuilder: FormBuilder){}

  ngOnInit() {
      //this.initForm();
      this.dropdownList = this.getData();
      this.dropdownSettings = {
        singleSelection: false,
        idField: 'item_id',
        textField: 'item_text',
        selectAllText: 'Select All',
        unSelectAllText: 'UnSelect All',
        itemsShowLimit: 3,
        allowSearchFilter: this.ShowFilter
    };

  }

 /* initForm(){
    this.form = this.formBuilder.group({
      grocery : ['', [Validators.required]]
    });
  }*/

  getObjectListFromData(ids:any){
    return this.getData().filter(item => ids.includes(item.item_id));
  }

  onItemSelect($event: any){
    console.log('$event is ', $event)
  }

  getData(): Array<any>{
    return [
      { item_id: 1, item_text: 'Fish' },
      { item_id: 2, item_text: 'Meat' },
      { item_id: 3, item_text: 'Soup' },
      { item_id: 4, item_text: 'Pasta' },
      { item_id: 5, item_text: 'Vegan food' },
    ]
  }

}
