import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { login } from '../store/user.actions';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  hide_password = true;
  hide_repeat = true;
  public user$: Observable<User>;
  public user!: User;

  public secondPassword = '';

  public newUser: User = {
    id: null,
    email: '',
    name: '',
    password: '',
    recipes: [],
    token: 'veeeeryloooongtoookeeen',
    ingredients: [],
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<{ user: User }>
  ) {
    this.user$ = this.store.select('user');
    this.user$.subscribe((us) => (this.user = us));
  }

  ngOnInit(): void {}

  signUp() {
    if (this.newUser.password !== this.secondPassword) {
      console.log('Passwords must be same');
    } else {
      this.userService.createUser(this.newUser).subscribe((user: User) => {
        this.store.dispatch(login({ user }));
      });
      this.router.navigate(['/']);
    }
  }
}
