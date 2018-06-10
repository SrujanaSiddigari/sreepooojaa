import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojacategoriesComponent } from './poojacategories.component';

describe('PoojacategoriesComponent', () => {
  let component: PoojacategoriesComponent;
  let fixture: ComponentFixture<PoojacategoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojacategoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojacategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
