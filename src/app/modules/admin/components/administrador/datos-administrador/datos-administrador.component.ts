import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '@modules/admin/services/admin/admin.service';
import decode from 'jwt-decode'
//import { decode } from 'querystring';

@Component({
  selector: 'app-datos-administrador',
  templateUrl: './datos-administrador.component.html',
  styleUrls: ['./datos-administrador.component.css']
})
export class DatosAdministradorComponent implements OnInit {

  constructor(private administradorServicio: AdminService, private cookie: CookieService) { }
  user: any = {
    tipoDocumento: '',
    documento: '',
    nombre: '',
    email: ''
  }

  // obtiene el administrador con ayuda del token
  ngOnInit(): void {
    this.administradorToken()
    this.administradorServicio.getOneAdministrador(this.administradorToken()).subscribe(
      (res: any) => {
        this.user = res
      }
    )
  }

  // actualiza al administrador
  updateAdministrador() {
    const documento = this.user.documento
    delete this.user.documento
    if (confirm('¿ Esta seguro de actualizar sus datos?')) {
      this.administradorServicio.updateAdministrador(documento, this.user).subscribe(
        res => {
          alert('Datos actualizados')
          { document.location.reload() }
        }, err => console.log(err)
      )
    } else {
      alert('Se cancelo')
      { document.location.reload() }
    }
  }

  // obtiene el documento del adminstrador por el token de sesion
  administradorToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token)

    return decodetoken.documento
  }

}
