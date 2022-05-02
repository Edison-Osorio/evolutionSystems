import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GruposCrusoComponent } from './grupos-cruso.component';

describe('GruposCrusoComponent', () => {
  let component: GruposCrusoComponent;
  let fixture: ComponentFixture<GruposCrusoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GruposCrusoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GruposCrusoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
