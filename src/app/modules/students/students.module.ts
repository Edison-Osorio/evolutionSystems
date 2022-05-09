import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsPagesComponent } from './pages/students-pages/students-pages.component';
import { NotasComponent } from './components/notas/notas.component';
import { ProgramadorComponent } from './components/programador/programador.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { StudentsStartComponent } from './components/students-start/students-start.component';
import { NavagationStudentsComponent } from './components/navagation-students/navagation-students.component';
import {StudentsService} from './services/students.service';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { FormsModule } from '@angular/forms';
import { StudentInformationComponent } from './components/student-information/student-information.component';


@NgModule({
  declarations: [
    StudentsStartComponent,
    StudentsPagesComponent,
    NotasComponent,
    ProgramadorComponent,
    ServiciosComponent,
    NavagationStudentsComponent,
    StudentInformationComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    StudentsService, {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true
    },
    DatePipe
  ]
})
export class StudentsModule { }
