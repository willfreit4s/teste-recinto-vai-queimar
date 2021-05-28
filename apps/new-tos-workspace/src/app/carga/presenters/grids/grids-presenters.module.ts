import { DxDataGridModule } from 'devextreme-angular';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxButtonModule, DxFormModule, DxPopupModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { GridsPresentersRoutingModule } from './grids-presenters.routing';
import { VeiculosEmOperacaoComponent } from './veiculos-em-operacao.component';

@NgModule({
  imports: [
    GridsPresentersRoutingModule,
    FormsModule,
    DxPopupModule,
    DxButtonModule,
    DxFormModule,
    DxiItemModule,
    DxDataGridModule
  ],
  declarations: [ VeiculosEmOperacaoComponent ]
})
export class GridsPresentersModule {}
