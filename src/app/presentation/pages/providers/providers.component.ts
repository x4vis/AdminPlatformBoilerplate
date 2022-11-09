import { Component, OnInit } from '@angular/core';
import { ProvidersFacadeService } from '@core/facades/repositories/providers/providers-facade.service';

@Component({
  selector   : 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls  : [ './providers.component.scss' ]
})
export class ProvidersComponent implements OnInit {

  constructor(private _providersFacadeService: ProvidersFacadeService) { }

  ngOnInit(): void {
    this.getProvidersList();
  }

  getProvidersList(): void {
    const provs = this._providersFacadeService.getAllProviders();
  }

}
