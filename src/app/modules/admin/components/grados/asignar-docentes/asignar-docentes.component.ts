import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '@modules/admin/services/asignatura/asignatura.service';
import { DocenteService } from '@modules/admin/services/docente/docente.service';
import { GradoService } from '@modules/admin/services/grado/grado.service';

@Component({
  selector: 'app-asignar-docentes',
  templateUrl: './asignar-docentes.component.html',
  styleUrls: ['./asignar-docentes.component.css'],
})
export class AsignarDocentesComponent implements OnInit {
  docentes: any = [];
  asignaturas: any = [];
  docentesAsignatura: any = [];
  showDocentes!: boolean;

  grado: any = {
    id_grado: '',
    nombre_grado: '',
  };

  docente_asignatura: any = {
    id_asignatura_ad: '',
    id_docente_ad: '',
  };

  constructor(
    private gradoService: GradoService,
    private docenteService: DocenteService,
    private asignaturaService: AsignaturaService
  ) {}

  ngOnInit(): void {
    this.getCodigoEmitido();
    this.listDocentes();
  }

  getCodigoEmitido() {
    this.gradoService.gradosEmitidos.subscribe((res: any) => {
      const { id_grado } = res;
      this.grado = res;
      this.listAsignaurasCurso(id_grado);
      this.listAsignaturaDocente(id_grado);
    });
  }
  // listamos todas las asignaturas segun el grado
  listAsignaurasCurso(id_grado: any) {
    this.asignaturaService
      .listAsignaturaGrado(id_grado)
      .subscribe((res: any) => {
        this.asignaturas = res;
      });
  }

  //Listamos todas las asignturas con su docente segun el grado
  listAsignaturaDocente(id_grado: any) {
    this.asignaturaService
      .listAsignaturaDocente(id_grado)
      .subscribe((res: any) => {
        if (res.length == []) {
          this.showDocentes = false;
        } else {
          this.showDocentes = true;
          this.docentesAsignatura = res;
        }
      });
  }

  // listramos todos los docentes
  listDocentes() {
    this.docenteService.getDocente().subscribe((res) => {
      this.docentes = res;
    });
  }
  //Asignamos a una asignatura su docente
  createAsignacion() {
    this.asignaturaService
      .createAsignaturaDocente(this.docente_asignatura)
      .subscribe(
        (res: any) => {
          alert(res.msg);
          this.listAsignaturaDocente(this.grado.id_grado);
          this.docente_asignatura.id_asignatura_ad = '';
          this.docente_asignatura.id_docente_ad = '';
        },
        (err) => alert('Ya el docente tiene asignada esa Asignatura')
      );
  }

  //Eliminamos una asignatura a un Docente
  deleteAsignaturaDocente(id_asignatura: any, id_docente: any) {
    if (
      confirm('¿Esta seguro de eliminarle esta asignatura a este al el docente')
    ) {
      this.asignaturaService
      .deleteAsignaturaDocente(id_asignatura, id_docente)
      .subscribe(
        (res: any) => {
          alert(res.msg);
          this.listAsignaturaDocente(this.grado.id_grado);
        },
        (err) =>
          alert(
            'Ocurrio un error y no se pudo eliminar la asignatura al docente'
          )
      );
    }
  }
}
