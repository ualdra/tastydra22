import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecipeCardComponent } from './recipe-card/recipe-card.component';
import { MenuTabsComponent } from './menu-tabs/menu-tabs.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchByCategoriesComponent } from './search-by-categories/search-by-categories.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { RecipeCardDetailComponent } from './recipe-card-detail/recipe-card-detail.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MenuCardComponent } from './menu-card/menu-card.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeIngredientsCardComponent } from './recipe-ingredients-card/recipe-ingredients-card.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatGridListModule } from '@angular/material/grid-list';
import { PreparationCardComponent } from './preparation-card/preparation-card.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AboutTastyComponent } from './about-tasty/about-tasty.component';
import { LoginComponent } from './login/login.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { SignUpComponent } from './sign-up/sign-up.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { CustomHttpInterceptor } from './http-interceptor';
import { RecipeDialogComponent } from './recipe-dialog/recipe-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { InformationDialogComponent } from './information-dialog/information-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    RecipeCardComponent,
    MenuTabsComponent,
    RecipeListComponent,
    SearchBarComponent,
    SearchByCategoriesComponent,
    RecipeCardDetailComponent,
    MenuCardComponent,
    MenuListComponent,
    ShoppingListComponent,
    RecipeIngredientsCardComponent,
    PreparationCardComponent,
    RecipeDetailComponent,
    PageNotFoundComponent,
    AboutTastyComponent,
    LoginComponent,
    SignUpComponent,
    NavbarComponent,
    SpinnerComponent,
    RecipeDialogComponent,
    InformationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgMultiSelectDropDownModule,
    HttpClientModule,
    MatCheckboxModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    StoreModule.forRoot({ user: userReducer }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CustomHttpInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
