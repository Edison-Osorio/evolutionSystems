// import { Grado } from '../../../../core/models/Curso';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from '@modules/admin/services/admin/admin.service';
import { CursoService } from '@modules/admin/services/curso.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {
  @Input()
  codigo: number = 0;
  @Output() onShare: EventEmitter<number> = new EventEmitter();

  constructor(
    private adminService: AdminService,
    private activedRoute: ActivatedRoute,
    private cusoService: CursoService
  ) {}
  cursos: any = [];

  hidden: boolean = false;
  hiddena: boolean = false;
  // grado: Grado = {
  //   cod_gra: '',
  //   rango_grad: '',
  //   carac_grad: '',
  //   nom_grad: '',
  //   plan_grad: '',
  //   desc_grad: '',
  //   imagen: '',
  // };

  notas: any = [];
  estudiantes: any = [];
  ngOnInit(): void {
    this.listCurso();

    // const params = this.activedRoute.snapshot.params;
    // if (params['cod_gra']) {
    //   this.adminService.getEstudiantes(params['cod_gra']).subscribe(
    //     (res) => {
    //       if (res != null) {
    //         this.hidden = true;
    //         this.estudiantes = res;
    //         console.log(res);
    //       }
    //     },
    //     (err) => console.log(err)
    //   );
    // } else {
    //   this.adminService.getGrados().subscribe(
    //     (res) => {
    //       console.log(res);
    //       this.grados = res;
    //     },
    //     (err) => console.error(err)
    //   );
    // }
  }

  listCurso() {
    this.cusoService.listCurso().subscribe((res: any) => {
      console.log(res);
      this.cursos = res
    });
  }

  deleteAlumno(id_alu: number | string) {
    this.adminService.deleteAlumno(id_alu).subscribe((res) => {
      console.log(res);
      window.location.reload();
      console.log('alumno eliminado');
    });
  }
  notasAlumno(cod_gra: number | string) {
    this.adminService.notasAlumnos(cod_gra).subscribe(
      (res) => {
        if (res != null) {
          this.hiddena = true;
          console.log(res);
          this.notas = res;
        }
      },
      (err) => console.log(err)
    );
  }

  // createGrado() {
  //   this.adminService.createGrado(this.grado).subscribe(
  //     (res) => {
  //       console.log(res);
  //       console.log('grado creado');
  //     },
  //     (err) => console.log(err)
  //   );
  // }

  deleteGrado(cod_gra: number | string) {
    if (confirm('¿Está seguro de eliminar este grado?')) {
      this.adminService.deleteGrado(cod_gra).subscribe(
        (res) => {
          console.log(res);
          console.log('docente eliminado');
          window.location.reload();
        },
        (err) => console.log(err)
      );
    }
  }
}
