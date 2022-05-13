import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeCardDetailComponent } from './recipe-card-detail.component';

describe('RecipeCardDetailComponent', () => {
  let component: RecipeCardDetailComponent;
  let fixture: ComponentFixture<RecipeCardDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecipeCardDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
