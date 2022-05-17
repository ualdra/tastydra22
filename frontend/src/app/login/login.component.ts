import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Signin } from '../signin';
import { login, logout } from '../store/user.actions';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  public user$: Observable<User>;
  public user: any;
  public isLogged = false;

  public signin: Signin = {
    email: '',
    password: '',
  };

  constructor(
    private userService: UserService,
    private router: Router,
    private store: Store<{ user: User }>
  ) {
    this.user$ = this.store.select('user');
    this.user$.subscribe((us) => (this.user = us));
    if (this.user?.id !== null) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  ngOnInit(): void {}

  logout() {
    this.store.dispatch(logout());
    this.router.navigate(['/']);
  }

  login() {
    this.userService.login(this.signin).subscribe((user) => {
      if (user !== null) {
        this.store.dispatch(login({ user }));
        this.router.navigate(['/']);
      }
    });
  }
}
