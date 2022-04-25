import { AdminService } from '@modules/admin/services/admin/admin.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  curso: Curso = {
    nombre_curso: '',
    plan_estudio: '',
    id_grupo: '',
    id_ciclo: '',
  };
  constructor(private cursoService: CursoService, private router: Router) {}

  ngOnInit(): void {
    this.getCiclos();
    this.getGrupos();
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
}
