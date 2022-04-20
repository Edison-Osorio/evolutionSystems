import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-navigation-admin',
  templateUrl: './navigation-admin.component.html',
  styleUrls: ['./navigation-admin.component.css'],
})
export class NavigationAdminComponent implements OnInit {


nameUser: string = ''



  constructor(private cookie: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.decodeToken()
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
}
