import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderJobsComponent } from './slider-jobs.component';

describe('SliderJobsComponent', () => {
  let component: SliderJobsComponent;
  let fixture: ComponentFixture<SliderJobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderJobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
