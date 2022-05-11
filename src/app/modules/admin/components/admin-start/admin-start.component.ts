import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode'
@Component({
  selector: 'app-admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.css'],
})
export class AdminStartComponent implements OnInit {

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
