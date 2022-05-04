
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminPagesComponent } from './pages/admin-pages/admin-pages.component';
import { AdminStartComponent } from './components/admin-start/admin-start.component';

import { NavigationAdminComponent } from './components/navigation-admin/navigation-admin.component';

import { HorarioComponent } from './components/horario/horario.component';
import { AsignaturaComponent } from './components/asignatura/asignatura.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { AlumnoComponent } from './components/alumno/alumno.component';
import { UpdateAlumnoComponent } from './components/alumno/update-alumno/update-alumno.component';
import { InsertAlumnoComponent } from './components/alumno/insert-alumno/insert-alumno.component';
import { DocenteComponent } from './components/docente/docente.component';
import { InsertDocenteComponent } from './components/docente/insert-docente/insert-docente.component';
import { UpdateDocenteComponent } from './components/docente/update-docente/update-docente.component';
import { AdminComponent } from './services/admin/admin.component';

import { AlumnoServicioComponent } from './components/servicios/alumno-servicio/alumno-servicio.component';
import { AsignarHoraioComponent } from './components/horario/asignar-horaio/asignar-horaio.component';
import { GradosComponent } from './components/grados/grados.component';
import { InsertGradoComponent } from './components/grados/insert-grado/insert-grado.component';
import { ListGruposComponent } from './components/grados/list-grupos/list-grupos.component';
import { InsertAsignaturaComponent } from './components/grados/insert-asignatura/insert-asignatura.component';
import { AsignarDocentesComponent } from './components/grados/asignar-docentes/asignar-docentes.component';
import { NotasComponent } from './components/grados/notas/notas.component';
import { BecaComponent } from './components/becas/becas.component';
import { AlumnoBecasComponent } from './components/becas/alumno-becas/alumno-becas.component';

@NgModule({
  declarations: [
    AdminPagesComponent,
    AdminStartComponent,
    NavigationAdminComponent,
    InsertAlumnoComponent,
      HorarioComponent,
      AsignaturaComponent,
      ServiciosComponent,
      AlumnoComponent,
      UpdateAlumnoComponent,
      DocenteComponent,
      InsertDocenteComponent,
      UpdateDocenteComponent,
      AdminComponent,
      NotasComponent,
      AlumnoServicioComponent,
      AsignarHoraioComponent,
      GradosComponent,
      InsertGradoComponent,
      ListGruposComponent,
      InsertAsignaturaComponent,
      AsignarDocentesComponent,
      BecaComponent,
      //AlumnoServiciosComponent,
      //AlumnoBecasComponent,
      AlumnoBecasComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // SharedModule,
    FormsModule,
HttpClientModule
  ],
  providers:[
    DatePipe
  ]

})
export class AdminModule { }
