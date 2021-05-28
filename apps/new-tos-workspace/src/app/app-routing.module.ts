import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      pageTitle: 'Bem Vindo!',
    },
    canActivate: [AuthGuard],
  },
  {
    path:'login',
    component: LoginComponent,
  },
  {
    path: 'carga',
    loadChildren: () =>
      import('./carga/carga.module').then((m) => m.CargaModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
