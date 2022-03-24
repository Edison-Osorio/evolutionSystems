import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrodoComponent } from './registrodo.component';

describe('RegistrodoComponent', () => {
  let component: RegistrodoComponent;
  let fixture: ComponentFixture<RegistrodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
