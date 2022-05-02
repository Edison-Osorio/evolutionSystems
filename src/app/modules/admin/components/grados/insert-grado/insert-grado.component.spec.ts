import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertGradoComponent } from './insert-grado.component';

describe('InsertGradoComponent', () => {
  let component: InsertGradoComponent;
  let fixture: ComponentFixture<InsertGradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsertGradoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertGradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
