import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { SolicitudesService } from '@modules/admin/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['./navigation-admin.component.css'],
})
export class NavigationAdminComponent implements OnInit {


nameUser: string = ''
total:any=[]


  constructor(private cookie: CookieService, private router: Router,private solicitudesService:SolicitudesService) {}

  ngOnInit(): void {
    this.decodeToken()
    this.totalSolicitudes()
  }

  salir() {
    this.cookie.delete('token', '/');
    this.router.navigate(['/']);
  }

  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);
    this.nameUser = decodetoken.nombre

  }

  // obtinen el total de las solicitudes
  totalSolicitudes(){
    this.solicitudesService.contarSolicitudes().subscribe(
      res=>{
        this.total=res
      }
    )
  }
}
