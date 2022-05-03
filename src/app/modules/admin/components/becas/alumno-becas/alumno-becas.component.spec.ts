import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoBecasComponent } from './alumno-becas.component';

describe('AlumnoBecasComponent', () => {
  let component: AlumnoBecasComponent;
  let fixture: ComponentFixture<AlumnoBecasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlumnoBecasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoBecasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
