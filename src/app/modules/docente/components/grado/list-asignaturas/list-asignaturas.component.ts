import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-list-asignaturas',
  templateUrl: './list-asignaturas.component.html',
  styleUrls: ['./list-asignaturas.component.css'],
})
export class ListAsignaturasComponent implements OnInit {
  showAsignaturas!: boolean;
  asignaturasGrado: any;

  documento: any;

  constructor(
    private docenteService: DocenteService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.decodeToken();
    this.getCodigoEmitido();
  }

  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    this.documento = decodetoken.documento;
  }

  getCodigoEmitido() {
    this.docenteService.codigoGradoEmitido.subscribe((res: any) => {
      this.listAsignaturas(this.documento, res.codigo);
    });
  }

  listAsignaturas(nif_docente: any, id_grado: any) {
    this.docenteService
      .listAsignaturasDocenteGrado(nif_docente, id_grado)
      .subscribe((res: any) => {
        if (res.length == []) {
          this.showAsignaturas = false;
        } else {
          this.showAsignaturas = true;
          this.asignaturasGrado = res;
        }
      });
  }
}
