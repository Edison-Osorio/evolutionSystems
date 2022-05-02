import { AdminService } from '@modules/admin/services/admin/admin.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from '@modules/admin/services/curso.service';
import { Curso } from '@core/models/Curso';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  ciclos: any = [];
  grupos: any = [];
  gruposCurso: any = [];
  showGrupos!: boolean;
  curso: Curso = {
    nombre_curso: '',
    plan_estudio: '',
    id_ciclo: '',
  };
  grupo: any = {
    id_curso_cg: '',
    id_grupo_cg: '',
  };
  constructor(
    private cursoService: CursoService,
    private router: Router,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.getCiclos();
    // this.getGrupos();
    // this.listGruposCurso();
  }

  getCiclos() {
    this.cursoService.getCiclo().subscribe((res: any) => {
      this.ciclos = res;
    });
  }

  // Obtenermos todos los grupos de la tabla Grupos
  getGrupos() {
    this.cursoService.getGrupo().subscribe((res: any) => {
      this.grupos = res;
    });
  }

  createCurso() {
    this.cursoService.createCurso(this.curso).subscribe(
      (res) => {
        alert('Grado Creado');
        {
          document.location.reload();
        }
      },
      (err) => console.log(err)
    );
  }
  // OPTENEMOS LA LISTA DE LOS GRUPOS ASIGNADOS AL CURSO
  listGruposCurso() {
    this.cursoService.cursoEmitido.subscribe((grupo:any) => {
      if (grupo.length == []) {
        this.showGrupos = false;
      } else {
        this.showGrupos = true;
        this.gruposCurso = grupo;
      }
    });
  }

  createGrupo() {
    const params = this.activedRoute.snapshot.params;
    this.grupo.id_curso_cg = params['id_curso'];
    this.cursoService.createGrupoCurso(this.grupo).subscribe((res:any)=>{alert(res.msg)
    document.location.reload()
    })

  }
}
