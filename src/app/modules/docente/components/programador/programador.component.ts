import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';

// Decodificador del token
import decode from 'jwt-decode'

@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css'],
})
export class ProgramadorComponent implements OnInit {
  horarios:any = [];

  identificador:number = 0

   constructor(private docenteService: DocenteService, private cookie:CookieService) {}

  ngOnInit(): void {
    this.getProgramador()
    this.decodeToken()
  }

  // Se obtiene el identificador del usuario 
  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

     return decodetoken.documento;
     
    }
    getProgramador() {
    // this.docenteService.getProgramador(this.decodeToken()).subscribe((res: any) => {
    //   console.log(res);
    //   this.horarios = res;
    //   console.log( 'Esta es la variable de Horario', this.horarios);
    // });
  }
}
