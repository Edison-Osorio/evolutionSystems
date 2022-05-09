import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotasComponent } from './components/notas/notas.component';
import { ProgramadorComponent } from './components/programador/programador.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { StudentInformationComponent } from './components/student-information/student-information.component';
import { StudentsStartComponent } from './components/students-start/students-start.component';
import { StudentsPagesComponent } from './pages/students-pages/students-pages.component';
const routes: Routes = [
  {
    path: '',
    component: StudentsPagesComponent,
    redirectTo: 'estudiante'

  },
  {
    path: 'estudiante',
    component: StudentsStartComponent,

  },
  {
    path: 'notas',
    component: NotasComponent,

  },
  {
    path: 'programador',
    component: ProgramadorComponent,

  },
  {
    path: 'servicios',
    component: ServiciosComponent,

  },
  {
    path:'estudiante/student-information',
    component:StudentInformationComponent
  },
  {
    path: '**',
    redirectTo: 'estudiante/estudiante',

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
