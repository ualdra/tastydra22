import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparationCardComponent } from './preparation-card.component';

describe('PreparationCardComponent', () => {
  let component: PreparationCardComponent;
  let fixture: ComponentFixture<PreparationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreparationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
