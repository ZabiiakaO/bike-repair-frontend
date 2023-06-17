import { TestBed } from '@angular/core/testing';

import { BikeTypeService } from './bike-type.service';

describe('BikeTypeService', () => {
  let service: BikeTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
