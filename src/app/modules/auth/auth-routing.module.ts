import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';
import { RestorePasswordComponent } from './pages/restore-password/restore-password.component';

const routes: Routes = [
  {
    path:'login',
    component: LoginPagesComponent
  },
  {
    path: 'restorePassword', 
    component: RestorePasswordComponent
  },
  {
    path:'**',
    redirectTo: '/auth/login'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
