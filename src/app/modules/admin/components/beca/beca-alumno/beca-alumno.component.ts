import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno.service';
import { BecaService } from '@modules/admin/services/beca.service';
import { ServiciosService } from '@modules/admin/services/servicios.service';

@Component({
  selector: 'app-beca-alumno',
  templateUrl: './beca-alumno.component.html',
  styleUrls: ['./beca-alumno.component.css']
})
export class BecaAlumnoComponent implements OnInit {

  constructor(private becaService: BecaService, private alumno: AlumnoService, private servicio: ServiciosService) { }
  beca_alumno: any = []
  alumnos: any = []
  becas: any = []
  servicios: any = []
  beca: any = {
    cod_beca: '',
    des_beca: '',
    cupo_beca: '',
  }
  alumno_beca: any = {
    id_alumno: 0,
    codigo_beca: 0,
    cod_servicio: 0
  }
  ngOnInit(): void {
    this.listBecasWhitService()
    this.listAlumnos()
    this.listBecas()
    this.listServicios()
  }

  //listar a los alumnos con becas y el servicio que los cubre
  listBecasWhitService() {
    this.becaService.listBecasWhitService().subscribe(
      res => {
        this.beca_alumno = res
      }, err => console.log(err)
    )
  }

  //traer alumnos
  listAlumnos() {
    this.alumno.getAlumnos().subscribe(
      res => {
        this.alumnos = res
      }, err => console.log(err)
    )
  }

  //traer becas
  listBecas() {
    this.becaService.getBecas().subscribe(
      res => {
        this.becas = res
      }
    )
  }

  //traer servicios
  listServicios() {
    this.servicio.getServices().subscribe(
      res => {
        this.servicios = res
      }
    )
  }
  refrehs() {
    this.alumno_beca.id_alumno = 0
    this.alumno_beca.codigo_beca = 0
    this.alumno_beca.cod_servicio = 0

  }

  // crear becas
  createBeca() {
    this.becaService.createBeca(this.beca).subscribe(
      res => {
        alert('se creo la beca')
        { document.location.reload() }
      }, err => alert('Codigo de la beca repetido o codigo de servicio inexistente')
    )
  }

  //crear alumno-beca-servicio
  createAlumno_beca() {
    if (confirm('Esta seguro de asignarle esta beca a este alumno')) {
      this.becaService.createAlumno_beca(this.alumno_beca).subscribe(
        res => {
          alert('Asignacion Completa')
          { document.location.reload() }
          this.refrehs()
        }, err => {
          console.log(err)
          alert('Codigo de beca o ID del alumno repetido')
          { document.location.reload() }
        }
      )
    } else { alert('Cancelado') }
  }

  // eliminar beca
  deleteAlumno_beca(codigo_beca: any) {
    if (confirm(`Esta seguro de elimar esta beca ${codigo_beca}?`)) {
      this.becaService.deleteBecasWhitService(codigo_beca).subscribe(
        res => {
          alert('Se elimino con exito')
          { document.location.reload() }
        },err=>console.log(err)
      )
    } else {
      alert('Se cancelo la elimincacion')
    }
  }
}
