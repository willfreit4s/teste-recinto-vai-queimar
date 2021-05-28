import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { DxBoxModule, DxButtonModule, DxFormModule } from 'devextreme-angular';
import { DxiItemModule } from 'devextreme-angular/ui/nested';
import { AuthGuard } from '../guards/auth.guard';
import { AuthService } from '../guards/auth.service';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing'

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    LoginRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DxButtonModule,
    DxBoxModule,
    DxiItemModule,
    DxFormModule
  ],
  providers: [ AuthGuard, AuthService ]
})
export class LoginModule { }
