import { TestBed } from '@angular/core/testing';
import { ThemeStoreFacadeService } from './theme-store-facade.service';

describe('ThemeStoreFacadeService', () => {
  let service: ThemeStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
