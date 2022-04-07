
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocentePageComponent } from './pages/docente-page/docente-page.component';
import { DocenteStartComponent } from './components/docente-start/docente-start.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { NotasComponent } from './components/notas/notas.component';
import { ProgramadorComponent } from './components/programador/programador.component';
import { NavagationDocenteComponent } from './components/navagation-docente/navagation-docente.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    DocentePageComponent,
    DocenteStartComponent,
    EstudianteComponent,
    GruposComponent,
    NotasComponent,
    ProgramadorComponent,
    NavagationDocenteComponent,
   ],
  imports: [
    CommonModule,
    DocenteRoutingModule,
    HttpClientModule
  ]
})
export class DocenteModule { }
