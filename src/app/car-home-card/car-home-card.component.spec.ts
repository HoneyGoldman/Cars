import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarHomeCardComponent } from './car-home-card.component';

describe('CarHomeCardComponent', () => {
  let component: CarHomeCardComponent;
  let fixture: ComponentFixture<CarHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarHomeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
