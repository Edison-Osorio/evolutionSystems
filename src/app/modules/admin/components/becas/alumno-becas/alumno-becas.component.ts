import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { BecaService } from '@modules/admin/services/becas/beca.service';
//import { BecaService } from '@modules/admin/services/beca.service';
import { ServiciosService } from '@modules/admin/services/servicios/servicios.service';


@Component({
  selector: 'app-alumno-becas',
  templateUrl: './alumno-becas.component.html',
  styleUrls: ['./alumno-becas.component.css']
})
export class AlumnoBecasComponent implements OnInit {

  constructor(private becaService: BecaService, private alumno: AlumnoService, private servicio: ServiciosService) { }
  beca_alumno: any = []
  disable: boolean = false
  alumnos: any = []
  becas: any = []
  servicios: any = []
  beca: any = {
    descripcion: '',
    cupo: '',
  }
  alumno_beca: any = {
    id_alumno: 0,
    codigo_beca: 0,
    id_servicio: 0
  }
  ngOnInit(): void {
    this.listBecasWhitService()
    this.listarAlumnos()
    this.listarBecas()
    this.listarServicios()
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
  listarAlumnos() {
    this.alumno.getAlumnos().subscribe(
      res => {
        this.alumnos = res
      }, err => console.log(err)
    )
  }

  //traer becas disponiber
  listarBecas() {
    this.becaService.getBecasDisponibles().subscribe(
      res => {
        this.becas = res
      }
    )
  }

  //traer servicios
  listarServicios() {
    this.servicio.getServices().subscribe(
      res => {
        this.servicios = res
      }
    )
  }

  //refresca el modelo
  refrehs() {
    this.alumno_beca.id_alumno = 0
    this.alumno_beca.codigo_beca = 0
    this.alumno_beca.id_servicio = 0
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
        }
      )
    } else { alert('Cancelado') }
  }

  // eliminar beca al aumno
  deleteAlumno_beca(codigo_beca: any, id_alumno: any) {
    if (confirm(`Esta seguro de elimar esta beca ${codigo_beca}?`)) {
      this.becaService.deleteBecasWhitService(codigo_beca, id_alumno).subscribe(
        res => {
          alert('Se elimino con exito')
          { document.location.reload() }
        }, err => console.log(err)
      )
    } else {
      alert('Se cancelo la elimincacion')
    }
  }
}
