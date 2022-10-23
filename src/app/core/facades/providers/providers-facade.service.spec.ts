import { TestBed } from '@angular/core/testing';

import { ProvidersFacadeService } from './providers-facade.service';

describe('ProvidersFacadeService', () => {
  let service: ProvidersFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
