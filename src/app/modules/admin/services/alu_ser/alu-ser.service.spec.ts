import { TestBed } from '@angular/core/testing';

import { AluSerService } from './alu-ser.service';

describe('AluSerService', () => {
  let service: AluSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AluSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
