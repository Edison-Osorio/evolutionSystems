import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsPagesComponent } from './pages/students-pages/students-pages.component';
import { NotasComponent } from './components/notas/notas.component';
import { ProgramadorComponent } from './components/programador/programador.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { StudentsStartComponent } from './components/students-start/students-start.component';
import { NavagationStudentsComponent } from './components/navagation-students/navagation-students.component';


@NgModule({
  declarations: [
    StudentsStartComponent,
    StudentsPagesComponent,
    NotasComponent,
    ProgramadorComponent,
    ServiciosComponent,
    NavagationStudentsComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
