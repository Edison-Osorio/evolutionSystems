import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from '@modules/docente/services/docente.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-grado',
  templateUrl: './grado.component.html',
  styleUrls: ['./grado.component.css'],
})
export class GradoComponent implements OnInit {
  grados: any = [];
  hidden: boolean = false;
  estudiantes: any = [];

  constructor(
    private docenteService: DocenteService,
    private cookie: CookieService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.decodeToken();
    this.getGrados();
  }

  codigoEmitido(codigo: any) {
    this.docenteService.codigoGradoEmitido.emit({ codigo });
  }

  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    return decodetoken.documento;
  }

  getGrados() {
    this.docenteService.getGrados(this.decodeToken()).subscribe((res: any) => {
      this.grados = res;
    });
  }
}
