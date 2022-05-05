import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationAdminComponent } from './components/navigation-admin/navigation-admin.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FooterComponent,
    NavigationAdminComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[
   FooterComponent,
  ]
})
export class SharedModule { }
