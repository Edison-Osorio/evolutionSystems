import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { RegistroComponent } from './components/grupos/registro/registro.component';
import { VerificarComponent } from './components/grupos/verificar/verificar.component';
import { ActualizarComponent } from './components/grupos/actualizar/actualizar.component';
import { RegistrodoComponent } from './components/profesor/registrodo/registrodo.component';
import { VerificardoComponent } from './components/profesor/verificardo/verificardo.component';
import { ActualizardoComponent } from './components/profesor/actualizardo/actualizardo.component';


const routes: Routes = [
  {
    path: '', 
    component:AdminPagesComponent,
    redirectTo: 'admin'
  },
  {
    path: 'admin', 
    component:AdminStartComponent
  },
  {
    path: 'grupos', 
    component: GruposComponent
  },
  {
    path: 'profesor', 
    component: ProfesorComponent
  },
  {
    path: 'registro', 
    component: RegistroComponent
  },
  {
    path: 'registrodo', 
    component: RegistrodoComponent
  },
  {
    path: 'verificar', 
    component: VerificarComponent
  },
  {
    path: 'verificardo', 
    component: VerificardoComponent
  },
  {
    path: 'actualizar', 
    component: ActualizarComponent
  },
  {
    path: 'actualizardo', 
    component: ActualizardoComponent
  },
  {
    path:'**',
    redirectTo: '/admin/admin'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
