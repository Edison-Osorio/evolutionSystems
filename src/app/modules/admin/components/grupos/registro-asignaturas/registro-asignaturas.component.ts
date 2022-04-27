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

  asignaturaCurso: any = []

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
this.notas()
  }

  getCodigoEmitido() {
    this.cursoService.cursosEmitidos.subscribe((res: any) => {
      console.log(
        'Este es el codigo emitido desde grupo para asignara -->',
        res
      );

      const {id_curso} = res

      console.log('Este es el codigo del curso -->', id_curso);
      this.getAignaurasCurso(id_curso)
      this.curso = res
    });
  }

  listAsignaturas(){
    this.cursoService.getListAsignaturas().subscribe((res:any)=>{
      console.log('Estas son todas las asignaturas --> ', res);

      this.asignaturas = res

    })
  }

   getAignaurasCurso(id: any){
     this.cursoService.getAsignaturaCurso(id).subscribe(
       (res:any)=>{
         console.log('Respuesta de las asignaturas del curso -->', res);
      this.asignaturaCurso = res
       }
     )
   }

   notas(){
     this.cursoService.notas(12345).subscribe(
       res=> console.log('Estas son las notas -->', res)

     )
   }

}
