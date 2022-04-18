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

  curso: Curso = {
    nombre_curso:'',
    plan_estudio: '',
    id_ciclo: '',

  };
  constructor(
    private adminService: AdminService,
    private cursoService: CursoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getCiclos();
  }

  getCiclos() {
    this.cursoService.getCiclo().subscribe((res: any) => {
      console.log('Esta es la respuesta del servidor', res);
      this.ciclos = res;

      console.log('Esta es la variable ciclos', this.ciclos);
    });
  }

  createCurso() {
    this.cursoService.createCurso(this.curso).subscribe(
      (res) => {
        console.log(res);
        console.log('grado creado');
        alert('Grado Creado')
        //this.router.navigate(['/admin/grupos'])
        {
          document.location.reload();
        }
      },
      (err) => console.log(err)
    );
  }
}
