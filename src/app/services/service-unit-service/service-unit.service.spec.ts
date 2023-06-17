import { TestBed } from '@angular/core/testing';

import { ServiceUnitService } from './service-unit.service';

describe('ServiceUnitService', () => {
  let service: ServiceUnitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceUnitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
