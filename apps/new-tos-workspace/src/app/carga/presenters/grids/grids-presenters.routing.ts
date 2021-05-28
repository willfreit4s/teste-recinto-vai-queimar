import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeiculosEmOperacaoComponent } from './veiculos-em-operacao.component';

const routes: Routes = [
   {
      path:'veiculos-em-operacao',
      component: VeiculosEmOperacaoComponent,
      data: {
         pageTitle: 'Veículos em Operação'
      }
   }
];

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
})
export class GridsPresentersRoutingModule {
}
