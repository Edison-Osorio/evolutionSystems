import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode'

@Component({
  selector: 'app-docente-start',
  templateUrl: './docente-start.component.html',
  styleUrls: ['./docente-start.component.css']
})
export class DocenteStartComponent implements OnInit {

  nameUser:any
  constructor(private cookie:CookieService) { }

  ngOnInit(): void {
    this.decodeToken()
  }

  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);
    this.nameUser = decodetoken.nombre

  }

}
