import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavagationDocenteComponent } from './navagation-docente.component';

describe('NavagationDocenteComponent', () => {
  let component: NavagationDocenteComponent;
  let fixture: ComponentFixture<NavagationDocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavagationDocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavagationDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
