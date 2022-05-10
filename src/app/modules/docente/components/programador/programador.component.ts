import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';

// Decodificador del token
import decode from 'jwt-decode';

@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css'],
})
export class ProgramadorComponent implements OnInit {
  horarios: any = [];
  horarioDias: any = [];
  dia: any = ''

  trimestres: any = [];

  identificador: number = 0;

  constructor(
    private docenteService: DocenteService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.getProgramador();
    this.decodeToken();
  }

  // Se obtiene el identificador del usuario
  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    return decodetoken.documento;
  }
  getProgramador() {
    this.docenteService
      .listHorario(this.decodeToken())
      .subscribe((res: any) => {
        this.horarios = res;
        this.horarioDias = res
      });
  }

  onSelectDia(id:any){
    const {value}= id
    if (this.dia == '') {
      this.horarioDias = this.horarios
    }else{
      this.horarioDias = this.horarios.filter((item:any)=> item.dia == value)
    }
  }

}
