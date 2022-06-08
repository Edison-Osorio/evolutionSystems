import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/User';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { addHours } from 'date-fns';
import decode from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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

  reloading() {
    // location.reload()
    let ref = document.getElementById('cerrar');
    ref?.click();
  }
  restorePassword() {
    this.reloading();
  }

  logIn() {
    this.authService.signin(this.user).subscribe(
      (res: any) => {
        const { token, msg } = res;
        if (!token) {
          this.errorSession = true;
          this.error = msg;

          return console.log('No se aprobo su ingreso');
        } else {
          let decodetoken: any = {};
          decodetoken = decode(token);

          const { rol } = decodetoken;

          const date: Date = addHours(new Date(), 1);
          this.cookie.set('token', token, date, '/');

          switch (rol) {
            case 'administrador':
              this.router.navigate(['/admin']);
              this.reloading();
              break;
            case 'docente':
              this.router.navigate(['/docente']);
              this.reloading();
              break;
            case 'estudiante':
              this.router.navigate(['/estudiante']);
              this.reloading();

              break;

            default:
              this.router.navigate(['/']);
              this.reloading();

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
