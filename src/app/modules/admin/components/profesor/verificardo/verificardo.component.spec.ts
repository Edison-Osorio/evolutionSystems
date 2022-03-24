import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificardoComponent } from './verificardo.component';

describe('VerificardoComponent', () => {
  let component: VerificardoComponent;
  let fixture: ComponentFixture<VerificardoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificardoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
