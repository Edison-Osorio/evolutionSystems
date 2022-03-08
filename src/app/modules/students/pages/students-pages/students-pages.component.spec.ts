import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsPagesComponent } from './students-pages.component';

describe('StudentsPagesComponent', () => {
  let component: StudentsPagesComponent;
  let fixture: ComponentFixture<StudentsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
