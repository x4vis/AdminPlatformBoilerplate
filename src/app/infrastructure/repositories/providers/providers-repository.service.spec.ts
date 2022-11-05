import { TestBed } from '@angular/core/testing';

import { ProvidersRepositoryService } from './providers-repository.service';

describe('ProvidersRepositoryService', () => {
  let service: ProvidersRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProvidersRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
