import { TestBed } from '@angular/core/testing';

import { ThemeLsStoreFacadeService } from './theme-ls-store-facade.service';

describe('ThemeStoreFacadeService', () => {
  let service: ThemeLsStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeLsStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
