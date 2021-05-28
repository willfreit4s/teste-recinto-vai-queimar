import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'grids',
    loadChildren: () =>
      import('./grids/grids-presenters.module').then(
        (m) => m.GridsPresentersModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PresenterRoutingModule {}
