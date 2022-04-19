import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderjobsComponent } from './sliderjobs.component';

describe('SliderjobsComponent', () => {
  let component: SliderjobsComponent;
  let fixture: ComponentFixture<SliderjobsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SliderjobsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SliderjobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
