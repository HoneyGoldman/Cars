import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NockOutComponent } from './nock-out.component';

describe('NockOutComponent', () => {
  let component: NockOutComponent;
  let fixture: ComponentFixture<NockOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NockOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NockOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
