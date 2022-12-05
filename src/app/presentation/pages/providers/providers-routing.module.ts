import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProvidersComponent } from './providers.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: 'listado', pathMatch: 'full' },
      { path: 'listado', component: ProvidersComponent },
      {
        path: 'crear',
        loadChildren: () =>
          import('./create/create.module').then(m => m.CreateModule),
      },
      {
        path: 'detalles',
        loadChildren: () =>
          import('./details/details.module').then(m => m.DetailsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProvidersRoutingModule {}
