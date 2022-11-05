import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProvidersRoutingModule } from './providers-routing.module';
import { ProvidersComponent } from './providers.component';

@NgModule({
  declarations: [
    ProvidersComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ]
})
export class ProvidersModule { }
