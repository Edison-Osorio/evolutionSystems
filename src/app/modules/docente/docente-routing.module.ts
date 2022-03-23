import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DocenteStartComponent } from './components/docente-start/docente-start.component';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { NotasComponent } from './components/notas/notas.component';
import { ProgramadorComponent } from './components/programador/programador.component';
import { DocentePageComponent } from './pages/docente-page/docente-page.component';

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
  {
    path: 'grupos',
    component: GruposComponent,
  },
  {
    path: 'programador',
    component: ProgramadorComponent,
  },

  {
    path: 'notas',
    component: NotasComponent,
  },
  {
    path: 'estudiantes',
    component: EstudianteComponent,
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
