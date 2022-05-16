import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocentePageComponent } from './pages/docente-page/docente-page.component';
import { DocenteStartComponent } from './components/docente-start/docente-start.component';
import { GruposComponent } from './components/grado/grupos/grupos.component';
import { NotasComponent } from './components/grado/notas/notas.component';
import { ProgramadorComponent } from './components/programador/programador.component';
import { NavagationDocenteComponent } from './components/navagation-docente/navagation-docente.component';
import { InformationsComponent } from './components/informations/informations.component';
import { InjectSessionInterceptor } from '@core/interceptors/inject-session.interceptor';
import { GradoComponent } from './components/grado/grado.component';
import { ListAlumnosComponent } from './components/grado/list-alumnos/list-alumnos.component';
import { ListAsignaturasComponent } from './components/grado/list-asignaturas/list-asignaturas.component';
import { InformeComponent } from './components/grado/notas/informe/informe.component';


@NgModule({
  declarations: [
    DocentePageComponent,
    DocenteStartComponent,
    GruposComponent,
    NotasComponent,
    ProgramadorComponent,
    NavagationDocenteComponent,
    InformationsComponent,
    GradoComponent,
    ListAlumnosComponent,
    ListAsignaturasComponent,
    InformeComponent
  ],

  imports: [
    CommonModule,
    DocenteRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[DatePipe,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InjectSessionInterceptor,
      multi: true
    }]
})
export class DocenteModule { }
