import { TestBed } from '@angular/core/testing';

import { ResolverPrestationService } from './resolver-prestation.service';

describe('ResolverPrestationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ResolverPrestationService = TestBed.get(ResolverPrestationService);
    expect(service).toBeTruthy();
  });
});
