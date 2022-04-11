import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';
import {ActivatedRoute} from '@angular/router'
import { Alumno } from '@core/models/Alumno';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  estudiantes:any = []
  constructor(private docenteService: DocenteService, private activedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['cod_gra']) {
      console.log(params['cod_gra']);
      
      this.docenteService.getEstudiantes(params['cod_gra']).subscribe(
        res => {
          if (res != null) {
            // this.hidden = true
            this.estudiantes = res;
            console.log(res)
          }
        },
        err => console.log(err)
      )
  }

}
}
