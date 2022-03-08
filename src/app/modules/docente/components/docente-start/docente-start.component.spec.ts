import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteStartComponent } from './docente-start.component';

describe('DocenteStartComponent', () => {
  let component: DocenteStartComponent;
  let fixture: ComponentFixture<DocenteStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocenteStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocenteStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
