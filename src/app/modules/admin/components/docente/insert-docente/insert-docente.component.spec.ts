import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertDocenteComponent } from './insert-docente.component';

describe('InsertDocenteComponent', () => {
  let component: InsertDocenteComponent;
  let fixture: ComponentFixture<InsertDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertDocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
