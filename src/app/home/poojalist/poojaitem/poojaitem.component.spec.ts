import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaitemComponent } from './poojaitem.component';

describe('PoojaitemComponent', () => {
  let component: PoojaitemComponent;
  let fixture: ComponentFixture<PoojaitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
