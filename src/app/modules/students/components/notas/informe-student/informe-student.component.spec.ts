import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeStudentComponent } from './informe-student.component';

describe('InformeStudentComponent', () => {
  let component: InformeStudentComponent;
  let fixture: ComponentFixture<InformeStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
