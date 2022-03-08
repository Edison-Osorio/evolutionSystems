import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsStartComponent } from './students-start.component';

describe('StudentsStartComponent', () => {
  let component: StudentsStartComponent;
  let fixture: ComponentFixture<StudentsStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
