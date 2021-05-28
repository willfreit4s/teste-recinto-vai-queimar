import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { CommonModule } from '@angular/common';
import {
  DxDrawerModule,
  DxPopupModule,
  DxToolbarModule,
  DxTreeViewModule,
} from 'devextreme-angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    DxToolbarModule,
    DxDrawerModule,
    DxTreeViewModule,
    DxPopupModule,
    RouterModule
  ],
  exports: [HeaderComponent],
})
export class SharedModule {}
