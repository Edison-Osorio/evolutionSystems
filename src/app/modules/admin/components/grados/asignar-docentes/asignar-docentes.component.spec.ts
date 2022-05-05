import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarDocentesComponent } from './asignar-docentes.component';

describe('AsignarDocentesComponent', () => {
  let component: AsignarDocentesComponent;
  let fixture: ComponentFixture<AsignarDocentesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarDocentesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarDocentesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
