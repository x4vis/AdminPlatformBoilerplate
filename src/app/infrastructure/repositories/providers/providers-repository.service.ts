import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProvidersRepositoryService {

  constructor() { }

  grettingsFromProvidersRepository(): string {
    return 'grettings from providers repositories'
  }
}
