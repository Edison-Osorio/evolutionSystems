import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BecaAlumnoComponent } from './beca-alumno.component';

describe('BecaAlumnoComponent', () => {
  let component: BecaAlumnoComponent;
  let fixture: ComponentFixture<BecaAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BecaAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BecaAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
