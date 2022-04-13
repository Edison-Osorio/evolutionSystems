import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';
import { ActivatedRoute } from '@angular/router';
// import { Alumno } from '@core/models/Alumno';
import decode from 'jwt-decode';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css'],
})
export class EstudianteComponent implements OnInit {
  estudiantes: any = [];
  asignatura: any = [];
  constructor(
    private docenteService: DocenteService,
    private activedRoute: ActivatedRoute,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['cod_gra']) {
      console.log(params['cod_gra']);

      this.docenteService.getEstudiantes(params['cod_gra']).subscribe(
        (res) => {
          if (res != null) {
            // this.hidden = true
            this.estudiantes = res;
            console.log(res);
          }
        },
        (err) => console.log(err)
      );
    }
    this.getAsignatura()
  }
  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    return decodetoken.documento;
  }

  getAsignatura() {
    this.docenteService
      .getAsignatura(this.decodeToken())
      .subscribe((res: any) => {
        console.log(res);
        
        this.asignatura = res;
      });
  }
}
