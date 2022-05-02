import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '@modules/admin/services/asignatura/asignatura.service';
import { GradoService } from '@modules/admin/services/grado/grado.service';
import { Grado } from '../../../../../core/models/grado';

@Component({
  selector: 'app-insert-asignatura',
  templateUrl: './insert-asignatura.component.html',
  styleUrls: ['./insert-asignatura.component.css']
})
export class InsertAsignaturaComponent implements OnInit {
  ciclos: any = [];
  asignaturas: any = [];
  showAsignaturas!: boolean;
  asignaturasCurso: any = [];
  grupos: any = [];

  grado: Grado = {
    id_grado:'',
    nombre_grado: '',
    plan_estudio: '',
  };
  asignatura: any = {
    nombre_asignatura: '',
    descripcion_asignatura:'',
    id_grado_a:''
  };

  constructor(private asignaturaService: AsignaturaService, private gradoService:GradoService) {}

  ngOnInit(): void {
     this.getCodigoEmitido();

  }

  getCodigoEmitido() {
    this.gradoService.gradosEmitidos.subscribe((res: any) => {
      const { id_grado } = res;
      this.listAsignaurasCurso(id_grado);
      this.asignatura.id_grado_a = id_grado
      this.grado = res;
      console.log('Este es el grado Emitido --> ', this.grado);

    });
  }

  // listAsignaturas() {
  //   this.cursoService.getListAsignaturas().subscribe((res: any) => {
  //     this.asignaturas = res;
  //   });
  // }

  listAsignaurasCurso(id_grado: any) {
    this.asignaturaService.listAsignaturaGrado(id_grado).subscribe((res: any) => {
      if (res.length == []) {
        this.showAsignaturas = false;
      } else {
        this.asignaturasCurso = res;
        this.showAsignaturas = true;
      }
    });
  }

  createAsignacion(){
  this.asignaturaService.createAsignatura(this.asignatura).subscribe((res:any)=>{
    const {msg} = res
    alert(msg)
    document.location.reload()
  },
  err=>alert('La asignatura ingresada ya esta asignada al curso'))
  }

   deleteAsignacion(id: number){
  //  const asignacion = {
  //     id_asignatura_cs: id,
  //     id_curso_cs: this.asignaturaCurso.id_curso_cs
  //   }

  //   if (confirm('¿Está seguro de eliminar la asignatura de este grupo?')) {
  //     this.cursoService.deleteAsignacion(asignacion).subscribe(
  //       (res:any)=>{
  //         const {msg} = res
  //         alert(msg)
  //         document.location.reload()
  //       },
  //       err =>alert('No se pudo eliminar la asignación')
  //     )
  //   }
  }
}
