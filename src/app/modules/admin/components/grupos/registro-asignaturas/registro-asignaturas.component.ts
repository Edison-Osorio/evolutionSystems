import { Component, OnInit } from '@angular/core';
import { CursoService } from '@modules/admin/services/curso.service';

@Component({
  selector: 'app-registro-asignaturas',
  templateUrl: './registro-asignaturas.component.html',
  styleUrls: ['./registro-asignaturas.component.css'],
})
export class RegistroAsignaturasComponent implements OnInit {
  ciclos: any = [];

  asignaturas:any =[]

  grupos: any = [];

  curso: any = {
    nombre_curso: '',
    plan_estudio: '',
    id_grupo: '',
    id_ciclo: '',
  };

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    this.getCodigoEmitido();
    this.listAsignaturas();
  }

  getCodigoEmitido() {
    this.cursoService.cursosEmitidos.subscribe((res: any) => {
      console.log(
        'Este es el codigo emitido desde grupo para asignara -->',
        res
      );
      this.curso = res
    });
  }

  listAsignaturas(){
    this.cursoService.getListAsignaturas().subscribe((res:any)=>{
      console.log('Estas son todas las asignaturas --> ', res);

      this.asignaturas = res

    })
  }

}
