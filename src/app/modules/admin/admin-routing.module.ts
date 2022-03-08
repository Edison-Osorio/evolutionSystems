import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { ProfesorComponent } from './components/profesor/profesor.component';


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
    path: 'alumnos', 
    component: AlumnosComponent
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
    path:'**',
    redirectTo: '/admin/admin'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
