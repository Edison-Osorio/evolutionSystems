import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
import { NavigationAdminComponent } from './components/navigation-admin/navigation-admin.component';
import { RegistroComponent } from './components/grupos/registro/registro.component';
import { VerificarComponent } from './components/grupos/verificar/verificar.component';
import { ActualizarComponent } from './components/grupos/actualizar/actualizar.component';
import { RegistrodoComponent } from './components/profesor/registrodo/registrodo.component';
import { VerificardoComponent } from './components/profesor/verificardo/verificardo.component';
import { ActualizardoComponent } from './components/profesor/actualizardo/actualizardo.component';



@NgModule({
  declarations: [
    AdminPagesComponent,
    AdminStartComponent,
    GruposComponent,
    ProfesorComponent,
    NavigationAdminComponent,
    RegistroComponent,
    VerificarComponent,
    ActualizarComponent,
    RegistrodoComponent,
    VerificardoComponent,
    ActualizardoComponent,  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    // SharedModule,
  ]
})
export class AdminModule { }
