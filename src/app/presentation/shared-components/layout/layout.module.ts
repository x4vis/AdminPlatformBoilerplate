import { NgModule } from '@angular/core';
import { CoreModule } from '@core/core.module';
import { LayoutRoutingModule } from './layout-routing.module';

import { LayoutComponent } from './layout.component';

import { TruncateTextPipe } from '@core/pipes/truncate-text/truncate-text.pipe';

// NG ZORRO
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';

@NgModule({
  declarations: [LayoutComponent, TruncateTextPipe],
  imports: [
    LayoutRoutingModule,
    CoreModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzDropDownModule,
    NzButtonModule,
  ],
  exports: [LayoutComponent],
})
export class LayoutModule {}
