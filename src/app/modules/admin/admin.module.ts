import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ProfesorComponent } from './components/profesor/profesor.component';
// import { SharedModule } from '@shared/shared.module';
import { NavigationAdminComponent } from './components/navigation-admin/navigation-admin.component';



@NgModule({
  declarations: [
    AdminPagesComponent,
    AdminStartComponent,
    AlumnosComponent,
    GruposComponent,
    ProfesorComponent,
    NavigationAdminComponent,  
  ],
  imports: [
    CommonModule,
    AdminRoutingModule, 
    // SharedModule,
  ]
})
export class AdminModule { }
