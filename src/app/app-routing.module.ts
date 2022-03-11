import { AuthGuard } from '@core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePagesComponent } from '@modules/home/pages/home-pages/home-pages.component';
import { RolGuard } from '@core/guards/rol.guard';
// import { AuthLoginGuard } from '@core/guards/auth-login.guard';

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
    loadChildren: () => import(`./modules/admin/admin.module`).then(m=>m.AdminModule), canActivate: [AuthGuard, RolGuard], data: {expectedRole: 'administrador'}
  },
  {
    path:'estudiante',
    loadChildren: () => import(`./modules/students/students.module`).then(m=>m.StudentsModule), canActivate: [AuthGuard, RolGuard], data: {expectedRole: 'estudiante'}
  },
  {
    path: 'docente',
    loadChildren: () => import(`./modules/docente/docente.module`).then(m=>m.DocenteModule), canActivate: [AuthGuard, RolGuard], data: {expectedRole: 'docente'}
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
