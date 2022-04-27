import { Component, OnInit } from '@angular/core';
import { CursoService } from '@modules/admin/services/curso.service';
import { HorarioService } from '@modules/admin/services/horario.service';

@Component({
  selector: 'app-asignar-horaio',
  templateUrl: './asignar-horaio.component.html',
  styleUrls: ['./asignar-horaio.component.css'],
})
export class AsignarHoraioComponent implements OnInit {

  asignaturas:any =[]
  horarios:any =[]

  asignatura_horario:any ={
    id_asignatura_ah: ' ',
    id_horario_ah: ' '
  }

  constructor(
    private horarioServices: HorarioService,
    private cursoServices: CursoService
  ) {}

  ngOnInit(): void {
    this.listHorario();
    this.listAsignaturas()
  }

  listHorario() {
    this.horarioServices.getHorario().subscribe((res: any) => {
      console.log('esta es la respuesta de los horarios -->', res);
      this.horarios = res
    });
  }

  listAsignaturas(){
    this.cursoServices.getListAsignaturas().subscribe((res: any) => {
      console.log('esta es la respuesta de las asignaturas -->', res);
      this.asignaturas = res
    })
  }

  createAsignacion(){
    console.log('esta es la informacion que se va a insertar --> ', this.asignatura_horario);

  }


}
