import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeIngredientsCardComponent } from './recipe-ingredients-card.component';

describe('RecipeIngredientsCardComponent', () => {
  let component: RecipeIngredientsCardComponent;
  let fixture: ComponentFixture<RecipeIngredientsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeIngredientsCardComponent ]
    })
    .compileComponents();
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
