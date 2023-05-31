import { TestBed } from '@angular/core/testing';

import { BikeRepairService } from './bike-repair.service';

describe('BikeRepairService', () => {
  let service: BikeRepairService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeRepairService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
