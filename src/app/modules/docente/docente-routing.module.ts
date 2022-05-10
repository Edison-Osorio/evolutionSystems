import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteStartComponent } from './components/docente-start/docente-start.component';
import { GruposComponent } from './components/grado/grupos/grupos.component';
import { InformationsComponent } from './components/informations/informations.component';
import { NotasComponent } from './components/grado/notas/notas.component';
import { ProgramadorComponent } from './components/programador/programador.component';
import { DocentePageComponent } from './pages/docente-page/docente-page.component';
import { GradoComponent } from './components/grado/grado.component';
import { ListAlumnosComponent } from './components/grado/list-alumnos/list-alumnos.component';

const routes: Routes = [
  {
    path: '',
    component: DocentePageComponent,
    redirectTo: 'docente',
  },
  {
    path: 'docente',
    component: DocenteStartComponent,
  },
  // Routes of grados
  {
    path: 'grados',
    component: GradoComponent,
  },
{
 path: 'grupos/:id_grado',
 component: GruposComponent
},
  {
    path: 'notas/:id_grado/:id_grupo',
    component: NotasComponent,
  },
  {
    path: 'alumnos/:id_grado/:id_grupo',
    component: ListAlumnosComponent,
  },
  // Routes of programador
  {
    path: 'programador',
    component: ProgramadorComponent,
  },
  {
    path: 'informations',
    component: InformationsComponent
  },


  {
    path: '**',
    redirectTo: '/docente/docente',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DocenteRoutingModule {}
