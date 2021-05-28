import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridComponent } from './grid/grid.component';
import { PopupComponent } from './popup/popup.component';
import { FormComponent } from './form/form.component';
import { DxPopupModule } from 'devextreme-angular';

@NgModule({
  declarations: [
    GridComponent,
    PopupComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    DxPopupModule
  ],
  exports:[
    GridComponent,
    PopupComponent,
    FormComponent
  ]
})
export class ComponentsModule { }
