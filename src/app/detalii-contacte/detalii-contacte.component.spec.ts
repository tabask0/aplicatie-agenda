import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaliiContacteComponent } from './detalii-contacte.component';

describe('DetaliiContacteComponent', () => {
  let component: DetaliiContacteComponent;
  let fixture: ComponentFixture<DetaliiContacteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaliiContacteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaliiContacteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
