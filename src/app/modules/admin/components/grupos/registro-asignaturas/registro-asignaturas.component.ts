import { Component, OnInit } from '@angular/core';
import { CursoService } from '@modules/admin/services/curso.service';

@Component({
  selector: 'app-registro-asignaturas',
  templateUrl: './registro-asignaturas.component.html',
  styleUrls: ['./registro-asignaturas.component.css'],
})
export class RegistroAsignaturasComponent implements OnInit {
  ciclos: any = [];
  asignaturas: any = [];
  showAsignaturas!: boolean;
  asignaturasCurso: any = [];
  grupos: any = [];

  curso: any = {
    nombre_curso: '',
    plan_estudio: '',
    id_grupo: '',
    id_ciclo: '',
  };
  asignaturaCurso: any = {
    id_asignatura_cs: '',
    id_curso_cs: ''
  };

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    // this.getCodigoEmitido();
    // this.listAsignaturas();
  }

  getCodigoEmitido() {
    this.cursoService.cursosEmitidos.subscribe((res: any) => {
      const { id_curso } = res;
      this.getAsignaurasCurso(id_curso);
      this.asignaturaCurso.id_curso_cs = id_curso
      this.curso = res;
    });
  }

  listAsignaturas() {
    this.cursoService.getListAsignaturas().subscribe((res: any) => {
      this.asignaturas = res;
    });
  }

  getAsignaurasCurso(id: any) {
    this.cursoService.getAsignaturaCurso(id).subscribe((res: any) => {
      if (res.length == []) {
        this.showAsignaturas = false;
      } else {
        this.asignaturasCurso = res;
        this.showAsignaturas = true;
      }
    });
  }

  createAsignacion(){
  this.cursoService.createAsignacion(this.asignaturaCurso).subscribe((res:any)=>{
    const {msg} = res
    alert(msg)
    document.location.reload()
  },
  err=>alert('La asignatura ingresada ya esta asignada al curso'))
  }

  deleteAsignacion(id: number){
   const asignacion = {
      id_asignatura_cs: id,
      id_curso_cs: this.asignaturaCurso.id_curso_cs
    }

    if (confirm('¿Está seguro de eliminar la asignatura de este grupo?')) {
      this.cursoService.deleteAsignacion(asignacion).subscribe(
        (res:any)=>{
          const {msg} = res
          alert(msg)
          document.location.reload()
        },
        err =>alert('No se pudo eliminar la asignación')
      )
    }
  }

}
