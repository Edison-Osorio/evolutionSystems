import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoServicioComponent } from './alumno-servicio.component';

describe('AlumnoServicioComponent', () => {
  let component: AlumnoServicioComponent;
  let fixture: ComponentFixture<AlumnoServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoServicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
