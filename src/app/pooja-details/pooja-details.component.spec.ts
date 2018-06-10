import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoojaDetailsComponent } from './pooja-details.component';

describe('PoojaDetailsComponent', () => {
  let component: PoojaDetailsComponent;
  let fixture: ComponentFixture<PoojaDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoojaDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoojaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
