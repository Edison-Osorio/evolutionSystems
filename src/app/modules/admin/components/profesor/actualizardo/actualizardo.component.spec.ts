import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizardoComponent } from './actualizardo.component';

describe('ActualizardoComponent', () => {
  let component: ActualizardoComponent;
  let fixture: ComponentFixture<ActualizardoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizardoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
