import { NgModule } from '@angular/core';
import { CoreModule } from '@src/app/core/core.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';

// NG ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';

@NgModule({
  declarations: [ LayoutComponent ],
  imports     : [ LayoutRoutingModule, CoreModule, NzLayoutModule, NzMenuModule, NzToolTipModule, NzDropDownModule, NzButtonModule ],
  exports     : [ LayoutComponent ]
})
export class LayoutModule {};