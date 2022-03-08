import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { NavigationAdminComponent } from './components/navigation-admin/navigation-admin.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavigationAdminComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
   FooterComponent,
   NavigationAdminComponent 
  ]
})
export class SharedModule { }
