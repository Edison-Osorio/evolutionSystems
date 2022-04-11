import { Grado } from './../../../../core/models/Grado';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '@modules/admin/services/admin/admin.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  constructor(private adminService: AdminService, private activedRoute: ActivatedRoute) { }
  grados: any = [];
  hidden: boolean = false;
  hiddena: boolean = false;
  grado: Grado = {
    cod_gra: '',
    rango_grad: '',
    carac_grad: '',
    nom_grad: '',
    plan_grad: '',
    desc_grad: ''
  }
  notas: any = [];
  estudiantes: any = [];
  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['cod_gra']) {
      this.adminService.getEstudiantes(params['cod_gra']).subscribe(
        res => {
          if (res != null) {
            this.hidden = true
            this.estudiantes = res;
            console.log(res)
          }
        },
        err => console.log(err)
      )
    } else {
      this.adminService.getGrados().subscribe(
        res => {
          console.log(res)
          this.grados = res;
        },
        err => console.error(err)
      )
    }
  }

  deleteAlumno(id_alu: number | string) {
    this.adminService.deleteAlumno(id_alu).subscribe(
      res => {
        console.log(res);
        window.location.reload();
        console.log('alumno eliminado')
      }
    )
  }
  notasAlumno(cod_gra: number | string) {
    this.adminService.notasAlumnos(cod_gra).subscribe(

      res => {
        if (res != null) {
          this.hiddena = true
          console.log(res);
          this.notas = res
        }
      },
      err => console.log(err)
    )
  }

  createGrado() {
    this.adminService.createGrado(this.grado).subscribe(
      res => {
        console.log(res)
        console.log('grado creado')
      },
      err => console.log(err)
    )
  }

  deleteGrado(cod_gra: number | string) {
    this.adminService.deleteGrado(cod_gra).subscribe(
      res => {
        console.log(res);
        console.log('docente eliminado')
        window.location.reload();
      },
      err => console.log(err)
    )

  }
}
