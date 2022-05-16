import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformeAdminComponent } from './informe-admin.component';

describe('InformeAdminComponent', () => {
  let component: InformeAdminComponent;
  let fixture: ComponentFixture<InformeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InformeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
