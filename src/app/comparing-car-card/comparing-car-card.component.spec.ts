import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparingCarCardComponent } from './comparing-car-card.component';

describe('ComparingCarCardComponent', () => {
  let component: ComparingCarCardComponent;
  let fixture: ComponentFixture<ComparingCarCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparingCarCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparingCarCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
