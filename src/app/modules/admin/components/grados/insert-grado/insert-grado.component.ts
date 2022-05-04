import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradoService } from '@modules/admin/services/grado/grado.service';
import { Grado } from '../../../../../core/models/grado';

@Component({
  selector: 'app-insert-grado',
  templateUrl: './insert-grado.component.html',
  styleUrls: ['./insert-grado.component.css'],
})
export class InsertGradoComponent implements OnInit {
  ciclos: any = [];
  grupos: any = [];
  gruposGrado: any = [];
  showGrupos!: boolean;
  grado: Grado = {
    nombre_grado: '',
    plan_estudio: '',
    id_ciclo_g: '',
  };
  grupo: any = {
    id_grado_grg: '',
    id_grupo_grg: '',
  };
  constructor(
    private gradoService: GradoService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getCiclos();
    this.getGrupos();
    this.listGruposGrado();
  }

  getCiclos() {
    this.gradoService.listCiclo().subscribe((res: any) => {
      this.ciclos = res;
    });
  }

  // Obtenermos todos los grupos de la tabla Grupos
  getGrupos() {
    this.gradoService.listGrupos().subscribe((res: any) => {
      this.grupos = res;
    });
  }

  createGrado() {
    this.gradoService.createGrado(this.grado).subscribe(
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
  listGruposGrado() {
    this.gradoService.gradoEmitido.subscribe((grupo: any) => {
      if (grupo.length == []) {
        this.showGrupos = false;
      } else {
        this.showGrupos = true;
        this.gruposGrado = grupo;
      }
    });
  }

  createGrupo() {
    const params = this.activedRoute.snapshot.params;
    this.grupo.id_grado_grg = params['id_grado'];
    this.gradoService
      .createAsignacionGrupoGrado(this.grupo)
      .subscribe((res: any) => {
        alert(res.msg);
        document.location.reload();
      });
  }
}
