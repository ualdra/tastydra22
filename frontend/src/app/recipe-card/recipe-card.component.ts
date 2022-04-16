import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.scss']
})
export class RecipeCardComponent implements OnInit {
  @Input() image = "";
  @Input() name =  "";
  @Input() id :number | undefined;
  fullName: String ="";
  constructor() { }

  ngOnInit(): void {
    this.fullName = this.name;
    if(this.name.length > 20){
      this.name = this.name.substring(0,17)+"...";
    }
  }

}
