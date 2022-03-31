import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import decode from 'jwt-decode';


@Component({
  selector: 'app-navagation-docente',
  templateUrl: './navagation-docente.component.html',
  styleUrls: ['./navagation-docente.component.css']
})
export class NavagationDocenteComponent implements OnInit {

  nameUser:string = ''

  name:string = 'hola'

    constructor(private cookie: CookieService, private router: Router) { }

  ngOnInit(): void {
    this.decodeToken()
  }

  salir(){
this.cookie.delete('token', '/')
this.router.navigate(['/']) 
  }

  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);
    console.log(decodetoken.nombre);
    this.nameUser = decodetoken.nombre
    console.log(this.nameUser);
    
  }

}
