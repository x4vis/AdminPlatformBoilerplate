import { Injectable } from '@angular/core';

@Injectable()
export class ProvidersRepositoryService {

  constructor() { }

  grettingsFromProvidersRepository(): string {
    return 'grettings from providers repositories'
  }
}
