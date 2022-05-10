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
import { AdministradorComponent } from './components/administrador/administrador.component';
import { DatosAdministradorComponent } from './components/administrador/datos-administrador/datos-administrador.component';
import { HorarioAsignadoComponent } from './components/grados/horario-asignado/horario-asignado.component';
import { ListAlumnosComponent } from './components/grados/list-alumnos/list-alumnos.component';
import { SolicitudesComponent } from './components/alumno/solicitudes/solicitudes.component';


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
    path: 'alumno', component: AlumnoComponent
  },
  {
    path: 'alumno/solicitudes',
    component: SolicitudesComponent
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
    path: 'notas/:id_grado/:id_grupo',
    component: NotasComponent
  },
  {
    path: 'alumnos/:id_grado/:id_grupo',
    component: ListAlumnosComponent
  },

  // Routes of Teacher
  {
    path: 'docente',
    component: DocenteComponent,
  },
  // Routes of horario
  {
    path: 'horario',
    component: HorarioComponent
  },
  {
    path: 'horario/:id_grado/:id_grupo',
    component: HorarioAsignadoComponent
  },
  // routes of services
  {
    path: 'servicios',
    component: ServiciosComponent
  },
  // routes of alum-services
  {
    path: 'servicios/alumno-servicios',
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
    path: 'administrador',
    component: AdministradorComponent
  },
  {
    path: 'administrador/datos',
    component: DatosAdministradorComponent
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
export class AdminRoutingModule { }
