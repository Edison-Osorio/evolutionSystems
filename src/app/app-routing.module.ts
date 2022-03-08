import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from '@modules/home/pages/home-pages/home-pages.component';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import(`./modules/auth/auth.module`).then(m=>m.AuthModule)
  },
  {
    path: '',
    component: HomePagesComponent,
    loadChildren: () => import(`./modules/home/home.module`).then(m=>m.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import(`./modules/admin/admin.module`).then(m=>m.AdminModule)
  },
  {
    path:'estudiante',
    loadChildren: () => import(`./modules/students/students.module`).then(m=>m.StudentsModule)
  },
  {
    path: 'docente',
    loadChildren: () => import(`./modules/docente/docente.module`).then(m=>m.DocenteModule)
  },
  {
    path: '**',
    redirectTo: '/',
    
  }

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
