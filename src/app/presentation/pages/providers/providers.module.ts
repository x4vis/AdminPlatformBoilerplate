import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProvidersComponent } from './providers.component';
import { ProvidersRoutingModule } from './providers-routing.module';

@NgModule({
  declarations: [
    ProvidersComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule,
  ]
})
export class ProvidersModule { }
