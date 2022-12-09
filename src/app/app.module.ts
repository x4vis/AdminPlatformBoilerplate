import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@src/app/presentation/shared-components/layout/layout.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, LayoutModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
