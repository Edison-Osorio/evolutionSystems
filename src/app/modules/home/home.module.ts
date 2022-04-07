import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePagesComponent } from './pages/home-pages/home-pages.component';
import { SliderComponent } from './components/slider/slider.component';
import { SharedModule } from '@shared/shared.module';
import { JobsComponent } from './components/jobs/jobs.component';
import { MatriculasComponent } from './components/matriculas/matriculas.component';
// import { AuthModule } from '@modules/auth/auth.module';
 import {HttpClientModule } from '@angular/common/http';
import { HomeStartComponent } from './components/home-start/home-start.component'
import { FormsModule } from '@angular/forms';
import { SliderJobsComponent } from './components/slider-jobs/slider-jobs.component';

@NgModule({
  declarations: [
    HomePagesComponent,
    SliderComponent,
    JobsComponent,
    MatriculasComponent,
    HomeStartComponent,
    SliderJobsComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    // AuthModule
    SharedModule,
    HttpClientModule,
    FormsModule
  ]
})
export class HomeModule { }
