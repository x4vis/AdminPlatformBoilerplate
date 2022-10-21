import { NgModule } from '@angular/core';

import { NzIconModule } from 'ng-zorro-antd/icon';
import { ICONS } from '../registered-icons'

@NgModule({
  declarations: [],
  imports     : [
    NzIconModule.forRoot(ICONS),
  ],
  exports: [
    NzIconModule
  ]
})
export class AppConfigModule { }
