import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultsCarCardComponent } from './results-car-card.component';

describe('ResultsCarCardComponent', () => {
  let component: ResultsCarCardComponent;
  let fixture: ComponentFixture<ResultsCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsCarCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
