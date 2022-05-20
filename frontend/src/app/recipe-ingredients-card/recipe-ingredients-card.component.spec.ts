import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { StoreModule } from '@ngrx/store';

import { RecipeIngredientsCardComponent } from './recipe-ingredients-card.component';

describe('RecipeIngredientsCardComponent', () => {
  let component: RecipeIngredientsCardComponent;
  let fixture: ComponentFixture<RecipeIngredientsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot({}, {}), HttpClientModule, MatDialogModule],
      declarations: [RecipeIngredientsCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIngredientsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
