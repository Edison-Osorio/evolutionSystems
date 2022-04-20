import { DocenteComponent } from './components/docente/docente.component';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { RegistroComponent } from './components/grupos/registro/registro.component';
import { VerificarComponent } from './components/grupos/verificar/verificar.component';
import { ActualizarComponent } from './components/grupos/actualizar/actualizar.component';

import { AlumnoComponent } from './components/alumno/alumno.component';
import { HorarioComponent } from './components/horario/horario.component';

const routes: Routes = [
  {
    path: '',
    component: AdminPagesComponent,
    redirectTo: 'admin',
  },
  {
    path: 'admin',
    component: AdminStartComponent,
  },
  // Routes of Students
  {
    path:'alumno', component: AlumnoComponent
  },
  // Routes of grupo
  {
    path: 'grupos/:cod_gra',
    component: GruposComponent,
  },
  {
    path: 'grupos',
    component: GruposComponent,
  },
  // Routes of Teacher
  {
    path: 'docente',
    component: DocenteComponent,
  },
  {
    path:'horario',
    component: HorarioComponent
  },
  {
    path:'horario/:cod_gra',
    component: HorarioComponent
  },
  {
    path: '**',
    redirectTo: '/admin/admin',
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
