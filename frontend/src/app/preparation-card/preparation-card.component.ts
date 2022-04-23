import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../api-tasty';

@Component({
  selector: 'app-preparation-card',
  templateUrl: './preparation-card.component.html',
  styleUrls: ['./preparation-card.component.scss']
})
export class PreparationCardComponent implements OnInit {
  preparation_text: string = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam ac mi vitae eros efficitur faucibus. Etiam at urna at augue consectetur laoreet. Proin nec nunc maximus, rhoncus felis vel, porttitor dui. Donec interdum accumsan mi ut placerat. Cras risus sapien, convallis vel venenatis sit amet, interdum non nisl. Morbi vulputate, purus et ullamcorper congue, felis arcu cursus leo, eget efficitur erat mauris id ipsum. Fusce aliquet, dui sit amet mollis varius, augue neque rhoncus leo, ut dapibus lorem diam non augue. Nunc quis ex sit amet sem ullamcorper euismod. Pellentesque id posuere quam. Curabitur consectetur eu ligula in placerat. Vestibulum vestibulum egestas auctor. Nulla sed facilisis urna, vitae congue dui. Vestibulum dolor lorem, interdum ut malesuada et, rutrum pellentesque lectus. Aenean sit amet tincidunt sapien.

  Morbi et lacus non augue venenatis gravida vitae nec mauris. Quisque venenatis dolor vel augue consectetur porta. Etiam vestibulum sed purus ac tempor. Phasellus eget nisi in neque tempus aliquam non quis est. Sed ac sagittis nunc, eu tristique quam. Nunc vitae viverra tellus, quis lacinia metus. Fusce ac malesuada tortor.

  Curabitur finibus ligula erat, a imperdiet ante ornare ut. Sed vulputate convallis massa id vulputate. Phasellus a arcu facilisis, eleifend nulla eget, condimentum neque. Sed vitae consequat nisi. Maecenas at maximus erat. Nunc eget augue ultricies, gravida mi eget, auctor tortor. Nunc elementum accumsan efficitur. In cursus faucibus venenatis. Suspendisse vel mattis lorem. Aliquam a justo suscipit mi blandit laoreet posuere sit amet purus. Nam ante ipsum, convallis eu est ac, dignissim gravida quam.

  Duis consectetur quis lacus eu pretium. In hac habitasse platea dictumst. Proin pulvinar nulla ac justo hendrerit fermentum. Phasellus vehicula sem eget metus maximus varius. Cras scelerisque commodo fringilla. Sed sit amet ipsum risus. Sed sollicitudin convallis mauris ac sodales. Ut pharetra rutrum justo imperdiet rutrum. Aenean eu arcu arcu. Nullam ut dolor id magna blandit euismod. Pellentesque odio est, tristique quis fringilla ut, mattis sed est. Fusce congue augue at ante tempor tempus at ac quam. Duis viverra risus non orci vestibulum dapibus. Nunc id fringilla libero, sed scelerisque nisi.

  Suspendisse potenti. Nulla facilisi. Vivamus bibendum lorem vel nulla varius, ac ornare velit mattis. Proin et lorem quis ex varius tempor. Duis condimentum consectetur maximus. Vestibulum lobortis lectus in metus tempor, a pharetra libero tempus. Quisque sit amet placerat lorem, sed hendrerit lorem. Sed et nisl maximus, interdum urna vitae, mollis diam. Pellentesque eleifend augue quis sapien dapibus, vehicula gravida urna luctus.`;

  @Input() recipe: Recipe | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
