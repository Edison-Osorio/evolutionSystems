import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { DocenteRoutingModule } from './docente-routing.module';
import { DocentePageComponent } from './pages/docente-page/docente-page.component';
import { DocenteStartComponent } from './components/docente-start/docente-start.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { NotasComponent } from './components/notas/notas.component';
import { ProgramadorComponent } from './components/programador/programador.component';
import { NavagationDocenteComponent } from './components/navagation-docente/navagation-docente.component';
import { InformationsComponent } from './components/informations/informations.component';


@NgModule({
  declarations: [
    DocentePageComponent,
    DocenteStartComponent,
    GruposComponent,
    NotasComponent,
    ProgramadorComponent,
    NavagationDocenteComponent,
    EstudianteComponent,
    InformationsComponent
  ],

  imports: [
    CommonModule,
    DocenteRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers:[DatePipe]
})
export class DocenteModule { }
