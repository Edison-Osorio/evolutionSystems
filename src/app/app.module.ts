import { InjectSessionInterceptor } from './core/interceptors/inject-session.interceptor';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { CookieService } from 'ngx-cookie-service';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
//import { BecasComponent } from './becas/becas.component';


@NgModule({
  declarations: [
    AppComponent,
    //BecasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ CookieService, {
    provide: HTTP_INTERCEPTORS,
    useClass: InjectSessionInterceptor,
    multi: true
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }

