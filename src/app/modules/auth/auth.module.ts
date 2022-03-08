import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPagesComponent } from './pages/login-pages/login-pages.component';

// modules
import { FormsModule } from '@angular/forms';
import {HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    LoginPagesComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    LoginPagesComponent
  ]
})
export class AuthModule { }
