import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTastyComponent } from './about-tasty.component';

describe('AboutTastyComponent', () => {
  let component: AboutTastyComponent;
  let fixture: ComponentFixture<AboutTastyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutTastyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTastyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
