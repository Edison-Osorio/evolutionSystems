import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAlumnoComponent } from './insert-alumno.component';

describe('InsertAlumnoComponent', () => {
  let component: InsertAlumnoComponent;
  let fixture: ComponentFixture<InsertAlumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertAlumnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
