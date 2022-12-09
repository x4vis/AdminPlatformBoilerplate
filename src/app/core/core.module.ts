import { Injector, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAppThemeInitializer } from '@core/helpers/ng-zorro-app-theme-initializer.service';
import {
  metaReducers,
  reducers,
} from '@src/app/infrastructure/store/ngrx/meta-reducer';
import { StoreModule } from '@ngrx/store';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NG_ZORRO_CONFIG } from './utils/ng-zorro-config';
import { ICONS } from './utils/ng-zorro-registered-icons';

export let AppInjector: Injector;

@NgModule({
  declarations: [],
  imports: [
    NzIconModule.forRoot(ICONS),
    StoreModule.forRoot(reducers, { metaReducers: metaReducers }),
  ],
  providers: [
    NgZorroAppThemeInitializer,
    { provide: NZ_CONFIG, useValue: NG_ZORRO_CONFIG },
  ],
  exports: [NzIconModule, BrowserAnimationsModule],
})
export class CoreModule {
  constructor(private _injector: Injector) {
    AppInjector = this._injector;
  }
}
