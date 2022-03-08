import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavagationStudentsComponent } from './navagation-students.component';

describe('NavagationStudentsComponent', () => {
  let component: NavagationStudentsComponent;
  let fixture: ComponentFixture<NavagationStudentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavagationStudentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavagationStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
