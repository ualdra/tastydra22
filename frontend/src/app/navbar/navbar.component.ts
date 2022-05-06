import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('collapse', [
      state('false', style({
        height: 100,
        visibility: 1
      })),
      state('true', style({
        height: '0',
        visibility: 'hidden'
      })),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('500ms ease-out'))
    ])
  ]
})

export class NavbarComponent implements OnInit {

  @HostBinding('class.is-active')
  public isActive = "";
  public collapse = true;
  @HostListener('click')
  toggleActive(): void {


    if(this.isActive){
      this.isActive = "";
      document.querySelector('.collapse')!.classList.remove("show");
    }
    else{
      this.isActive = "is-active";
      document.querySelector('.collapse')!.classList.add("show");
    }
  }
  constructor() {
  }

  ngOnInit(): void {
  }
  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }
  myFunction(): void {
    alert("Hello! I am an alert box!");
  }
}





