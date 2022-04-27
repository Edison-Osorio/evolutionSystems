import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignarHoraioComponent } from './asignar-horaio.component';

describe('AsignarHoraioComponent', () => {
  let component: AsignarHoraioComponent;
  let fixture: ComponentFixture<AsignarHoraioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsignarHoraioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AsignarHoraioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
