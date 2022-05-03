import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { ServiciosService } from '@modules/admin/services/servicios/servicios.service';

@Component({
  selector: 'app-alumno-servicio',
  templateUrl: './alumno-servicio.component.html',
  styleUrls: ['./alumno-servicio.component.css']
})
export class AlumnoServicioComponent implements OnInit {

  constructor(private servicosServices: ServiciosService, private alumService: AlumnoService) { }
  alumno_servicio: any = []
  servicios: any = []
  alumnos: any = []

  ngOnInit(): void {
    this.getAlumno_Servicio();
    this.getServiciosAndAlumnos()
  }

  //obtiene los servicios y alumnos
  getServiciosAndAlumnos() {
    this.servicosServices.getServices().subscribe(
      res => {
        this.servicios = res;
      },
      err => console.log(err)
    )
    this.alumService.getAlumnos().subscribe(
      res => {
        this.alumnos = res;
      }, err => console.log(err)
    )
  }

  //obtiene los alumnos con servicios
  getAlumno_Servicio() {
    this.servicosServices.getAlumno_Servicio().subscribe(
      res => {
        this.alumno_servicio = res
      }, err => console.error(err)
    )
  }

  // le elimina el servicio al alumno
  deleteAlumno_Servicio(id_alu: any, cod_ser: any) {
    if (confirm('¿Esta seguro de eliminarle este servicio al este alumno?')) {
      this.servicosServices.deleteAlumno_Servicio(id_alu, cod_ser).subscribe(
        res => {
          this.getServiciosAndAlumnos()
          this.getAlumno_Servicio()
          alert('Se le elimno el servicio al alumno ')
        }
      )
    }
  }

  alu_ser: any = {
    codigo_servicio_as: 0,
    id_alumno_as: 0
  }
  services: any = {
    cod_ser: '',
    tipo_ser: '',
    desc_ser: '',
    valor: ''
  }

  //refresca el modelo
  refresh() {
    this.alu_ser.cod_servicio = 0
    this.alu_ser.id_alumno = 0
  }

  //le asigna el servicio al alumnno
  createAlu_ser() {
    this.servicosServices.createAlumno_servicio(this.alu_ser).subscribe(
      res => {
        const ref = document.getElementById('cancel')
        ref?.click()
        this.getServiciosAndAlumnos()
        this.getAlumno_Servicio()
      },
      err => console.log(err)
    )
  }

  //obtiene un servicio alumno
  getOneAlu_Ser(id_alumno: any, cod_servicio: any) {
    this.servicosServices.getOne(id_alumno, cod_servicio).subscribe(
      res => {
        this.alu_ser = res
      }, err => console.log(err)
    )
  }
}
