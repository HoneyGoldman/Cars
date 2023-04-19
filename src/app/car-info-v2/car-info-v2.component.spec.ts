import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarInfoV2Component } from './car-info-v2.component';

describe('CarInfoV2Component', () => {
  let component: CarInfoV2Component;
  let fixture: ComponentFixture<CarInfoV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarInfoV2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarInfoV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
