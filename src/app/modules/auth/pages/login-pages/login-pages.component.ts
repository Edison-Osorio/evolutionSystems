import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/User';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { addHours } from 'date-fns';
import decode from 'jwt-decode';

@Component({
  selector: 'app-login-pages',
  templateUrl: './login-pages.component.html',
  styleUrls: ['./login-pages.component.css'],
})
export class LoginPagesComponent implements OnInit {
  errorSession: boolean = false;

  // Variable que mustra el error del servidor
  error: string = '';

  user: User = {
    // email: 'osorio@gmail.com',
    // password: '12345',
    tipoDocumento: '1',
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
    this.authService.signin(this.user).subscribe(
      (res: any) => {
        const { token, msg } = res;
        if (!token) {
          this.errorSession = true;
          this.error = msg;

          return console.log('no se aprobo su ingreso');
        } else {
          let decodetoken: any = {};
          decodetoken = decode(token);

          const { rol } = decodetoken;

          const date: Date = addHours(new Date(), 1);
          this.cookie.set('token', token, date, '/');

          switch (rol) {
            case 'administrador':
              this.router.navigate(['/admin']);
              break;
            case 'docente':
              this.router.navigate(['/docente']);
              break;
            case 'estudiante':
              this.router.navigate(['/estudiante']);
              break;

            default:
              this.router.navigate(['/']);
              break;
          }
        }
      },
      (err) => {
        this.errorSession = true;
        console.log('Su contraseña o email incorrecto');
        console.log(err);
        
      }
    );
  }
}
