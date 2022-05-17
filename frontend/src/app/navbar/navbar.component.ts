import { Component, OnInit, HostBinding, HostListener } from '@angular/core';
import { Store } from '@ngrx/store';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { User } from '../user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  animations: [
    trigger('collapse', [
      state(
        'false',
        style({
          height: 100,
          visibility: 1,
        })
      ),
      state(
        'true',
        style({
          height: '0',
          visibility: 'hidden',
        })
      ),
      transition('false => true', animate('500ms ease-in')),
      transition('true => false', animate('500ms ease-out')),
    ]),
  ],
})
export class NavbarComponent implements OnInit {
  @HostBinding('class.is-active')
  public isActive = '';
  public collapse = true;

  public user$: Observable<User>;

  public user!: User;

  constructor(private store: Store<{ user: User }>) {
    this.user$ = this.store.select('user');
    this.user$.subscribe((us) => (this.user = us));
  }

  ngOnInit(): void {}

  @HostListener('click')
  toggleActive(): void {
    if (this.isActive) {
      this.isActive = '';
      document.querySelector('.collapse')!.classList.remove('show');
    } else {
      this.isActive = 'is-active';
      document.querySelector('.collapse')!.classList.add('show');
    }
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
  }
}
