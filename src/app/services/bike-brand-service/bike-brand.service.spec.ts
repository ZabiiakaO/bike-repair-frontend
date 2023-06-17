import { TestBed } from '@angular/core/testing';

import { BikeBrandService } from './bike-brand.service';

describe('BikeBrandService', () => {
  let service: BikeBrandService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BikeBrandService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
