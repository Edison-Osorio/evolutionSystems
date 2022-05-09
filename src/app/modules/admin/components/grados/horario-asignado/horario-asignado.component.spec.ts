import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAsignadoComponent } from './horario-asignado.component';

describe('HorarioAsignadoComponent', () => {
  let component: HorarioAsignadoComponent;
  let fixture: ComponentFixture<HorarioAsignadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioAsignadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HorarioAsignadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
