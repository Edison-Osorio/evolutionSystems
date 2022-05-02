import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertAsignaturaComponent } from './insert-asignatura.component';

describe('InsertAsignaturaComponent', () => {
  let component: InsertAsignaturaComponent;
  let fixture: ComponentFixture<InsertAsignaturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertAsignaturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertAsignaturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
