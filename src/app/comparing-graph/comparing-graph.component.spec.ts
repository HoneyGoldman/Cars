import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparingGraphComponent } from './comparing-graph.component';

describe('ComparingGraphComponent', () => {
  let component: ComparingGraphComponent;
  let fixture: ComponentFixture<ComparingGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComparingGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComparingGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
