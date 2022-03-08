import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/User';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import {addHours} from 'date-fns'
import decode  from 'jwt-decode'

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css'],
})
export class LoginPagesComponent implements OnInit {
  errorSession: boolean = false;

  user: User = {
    // email: 'osorio@gmail.com',
    // password: '12345',
    // tipoDocumento:'1',
    documento: '',
    contrasena: '',
  };

  constructor(
    private authService: AuthService,
    private router: Router,
     private cookie: CookieService
  ) {}
  ngOnInit(): void {}

  logIn() {
    delete this.user.tipoDocumento;
    console.log(this.user);
    this.authService.signin(this.user).subscribe(
      (res: any) => {
        console.log(res);
        const { token } = res;
        if (!token) return console.log('no se aprobo su ingreso');
        ;
        console.log('el token es igual a  --->', token);

        let decodetoken:any = {};
        decodetoken = decode(token);
        
        console.log(decodetoken.tipoDocumento);
        
        
          const date:Date = addHours(new Date(), 1)
          this.cookie.set('token', token, date, '/');
        
         this.router.navigate(['/'])

      },
      (err) => {
        this.errorSession = true;
        console.log('Su contraseña o email incorrecto');
      }
    );
  }
}
