import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@core/models/User';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-restore-password',
  templateUrl: './restore-password.component.html',
  styleUrls: ['./restore-password.component.css'],
})
export class RestorePasswordComponent implements OnInit {
  mensaje: string = '';
  success: string = '';
  mensajeConfirmacion: string = '';
  existUser: boolean = false;
  information: boolean = false;

  user: User = {
    tipoDocumento: '1',
    documento: '',
    email: '',
    contrasena: '',
  };

  constructor(private authService: AuthService, private router:Router) {}

  ngOnInit(): void {}

  searchUser() {
    delete this.user.tipoDocumento;
    delete this.user.contrasena;

    this.authService.getOnUser(this.user).subscribe((res: any) => {
      const { token, msgOk, msg } = res;
      if (!token) {
        this.existUser = false;
        this.information = true;
        this.mensaje = msg;
      } else {
        this.existUser = true;
        this.information = true;
        // this.mensaje = msgOk;
      }
    });
  }

  restorePassword() {
    delete this.user.tipoDocumento;

    this.authService.updateUser(this.user).subscribe((res: any) => {
      console.log(res);
      const { msg, data } = res;

      alert(msg);
      this.router.navigate(['/auth/login'])

    });

    console.log(this.user);
  }
}
