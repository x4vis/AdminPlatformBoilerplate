import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppConfigModule } from '@core/utils/app-config/app-config.module';

import { AppComponent } from './app.component';
import { LayoutComponent } from './presentation/sharedComponents/layout/layout.component';

// NG ZORRO
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

@NgModule({
  declarations: [ AppComponent, LayoutComponent ],
  imports     : [ BrowserModule, BrowserAnimationsModule, AppRoutingModule, NzLayoutModule, NzMenuModule, AppConfigModule ],
  providers   : [],
  bootstrap   : [ AppComponent ],
})
export class AppModule { }
