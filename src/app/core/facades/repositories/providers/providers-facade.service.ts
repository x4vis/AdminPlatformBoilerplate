import { Injectable } from '@angular/core';
import { ProvidersRepositoryService } from '@infrastructure/repositories/providers/providers-repository.service';

@Injectable({
  providedIn: 'root',
})
export class ProvidersFacadeService {
  constructor(
    private _providersRepositoryService: ProvidersRepositoryService
  ) {}

  getAllProviders(): string {
    return this._providersRepositoryService.grettingsFromProvidersRepository();
  }
}
