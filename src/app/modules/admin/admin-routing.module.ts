import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminStartComponent } from './components/admin-start/admin-start.component';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { DocenteComponent } from './components/docente/docente.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { HorarioComponent } from './components/horario/horario.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AlumnoServicioComponent } from './components/servicios/alumno-servicio/alumno-servicio.component';
// import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { GradosComponent } from './components/grados/grados.component';
import { ListGruposComponent } from './components/grados/list-grupos/list-grupos.component';
import { NotasComponent } from './components/grados/notas/notas.component';
//import { BecasComponent } from './components/becas/becas.component';
import { BecaComponent } from './components/becas/becas.component';
import { AlumnoBecasComponent } from './components/becas/alumno-becas/alumno-becas.component';


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
    path: 'grado',
    component: GradosComponent,
  },
  {
    path: 'grupos/:id_grado',
    component: ListGruposComponent
  },
  {
    path:'notas/:id_grado/:id_grupo',
    component: NotasComponent
  },

  // Routes of Teacher
  {
    path: 'docente',
    component: DocenteComponent,
  },
  // Routes of horario
  {
    path:'horario',
    component: HorarioComponent
  },
  // {
  //   path:'asignar-horio',
  //   component: AsignarHoraioComponent
  // },
  {
    path:'horario/:cod_gra',
    component: HorarioComponent
  },
  // routes of services
  {
    path:'servicios',
    component: ServiciosComponent
  },
  // routes of alum-services
  {
    path:'servicios/alumno-servicios',
    component: AlumnoServicioComponent
  },
  {
    path: 'becas',
    component: BecaComponent
  },
  {
    path: 'becas/alumno-becas',
    component: AlumnoBecasComponent
},
  // {
  //   path:'becas',
  //   component: BecaComponent
  // },
  // {
  //   path:'becas/becas-alumnos',
  //   component: BecaAlumnoComponent
  // },
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
