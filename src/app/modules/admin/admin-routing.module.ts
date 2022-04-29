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
import { NotasComponent } from './components/grupos/notas/notas.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AlumnoServicioComponent } from './components/servicios/alumno-servicio/alumno-servicio.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { BecaComponent } from './components/beca/beca.component';
import { BecaAlumnoComponent } from './components/beca/beca-alumno/beca-alumno.component';

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
  {
    path:'notas/:id_curso',
    component: NotasComponent
  },

  // Routes of asignatura
  {
    path:'asignatura',
    component: AsignaturaComponent
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
    path:'becas',
    component: BecaComponent
  },
  {
    path:'becas/becas-alumnos',
    component: BecaAlumnoComponent
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
