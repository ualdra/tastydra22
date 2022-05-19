import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import { User } from '../user';
import { login, logout } from './user.actions';

export const initialUserState: User = {
  id: null,
  email: '',
  name: '',
  password: '',
  recipes: [],
  token: '',
  ingredients: [],
};

export const userReducer = createReducer(
  initialUserState,
  on(login, (state, { user }) => {
    return {
      ...user,
    };
  }),
  on(logout, () => {
    return {
      ...initialUserState,
    };
  })
);
