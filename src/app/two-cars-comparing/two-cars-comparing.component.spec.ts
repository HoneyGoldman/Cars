import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoCarsComparingComponent } from './two-cars-comparing.component';

describe('TwoCarsComparingComponent', () => {
  let component: TwoCarsComparingComponent;
  let fixture: ComponentFixture<TwoCarsComparingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TwoCarsComparingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoCarsComparingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
