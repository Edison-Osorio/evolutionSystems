import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeStartComponent } from './components/home-start/home-start.component';
import { JobsComponent } from './components/jobs/jobs.component';
import { MatriculasComponent } from './components/matriculas/matriculas.component';

const routes: Routes = [
  {
    path: '',
    component: HomeStartComponent
  },
  {
    path: 'jobs',
    component: JobsComponent
  },
  {
     path: 'matriculas',
     component: MatriculasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
