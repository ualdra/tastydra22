import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByCategoriesComponent } from './search-by-categories.component';

describe('SearchByCategoriesComponent', () => {
  let component: SearchByCategoriesComponent;
  let fixture: ComponentFixture<SearchByCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
