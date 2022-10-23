import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgZorroAppInitializer } from '@core/helpers/ng-zorro-app-theme-initializer.service';
import { NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ICONS } from './utils/ng-zorro-registered-icons';
import { NG_ZORRO_CONFIG } from './utils/ng-zorro-config';

@NgModule({
  declarations: [],
  imports     : [
    NzIconModule.forRoot(ICONS),
  ],
  providers: [
    NgZorroAppInitializer,
    { provide: NZ_CONFIG, useValue: NG_ZORRO_CONFIG},
  ],
  exports: [
    NzIconModule,
    BrowserAnimationsModule,
  ]
})
export class CoreModule { }
