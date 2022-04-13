import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabsComponent } from './menu-tabs.component';

describe('MenuTabsComponent', () => {
  let component: MenuTabsComponent;
  let fixture: ComponentFixture<MenuTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
