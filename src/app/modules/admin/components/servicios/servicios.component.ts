import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AdminService } from '@modules/admin/services/admin.service';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { ServiciosService } from '@modules/admin/services/servicios/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private Services: ServiciosService, private alumnoService: AlumnoService, private router: Router) { }

  servicios: any = []
  alumnos: any = []
  alumno_servicio: any = []

  alu_ser: any = {
    codigo_servicio_as: 0,
    id_alumno_as: 0
  }

  // "modelo" de servicios
  services: any = {
    id_servicio: '',
    tipo_servicio: '',
    descripcion_servicio: '',
    valor: ''
  }

  ngOnInit(): void {
    this.getServiciosAndAlumnos()

  }

  // obtiene los alumnos y servicios
  getServiciosAndAlumnos() {
    this.Services.getServices().subscribe(
      res => {
        this.servicios = res;
      },
      err => console.log(err)
    )
    this.alumnoService.getAlumnos().subscribe(
      res => {
        this.alumnos = res;
      }, err => console.log(err)
    )

  }

  // refresca el modelo
  refresh() {
    this.alu_ser.cod_servicio = 0
    this.alu_ser.id_alumno = 0
  }

  //le asigna el servicio al alumno
  createAlumno_Servicio() {
    if (confirm('Esta seguro de asignarle este servicio al alumno')) {
      this.Services.createAlumno_servicio(this.alu_ser).subscribe(
        res => {
          const ref = document.getElementById('cancel')
          ref?.click()
          this.getServiciosAndAlumnos()
          this.router.navigate(['admin/servicios/alumno-servicios'])
        },
        err => console.log(err)
      )
    }
  }

  // obtiene los alumnos con servio
  getAlumno_Servicio() {
    this.Services.getAlumno_Servicio().subscribe(
      res => {
        this.alumno_servicio = res
      }
    )
  }

  // obtiene un alumno con servicio
  getOneAlu_Ser(id_alumno: any, cod_servicio: any) {
    this.Services.getOne(id_alumno, cod_servicio).subscribe(
      res => {
        this.alu_ser = res
      }, err => console.log(err)
    )
  }

  //obtiene un servicio
  getOneService(cod_ser: any) {
    this.Services.getOneServices(cod_ser).subscribe(
      res => {
        //console.log(res)
        this.services = res
      }, err => console.log(err)
    )
  }

  //actualiza el servicio "solo la descripcion y el valor de este"
  updateService() {
    if (confirm('Esta seguro de actualizar este servicio')) {
      this.Services.updateService(this.services.id_servicio, this.services).subscribe(
        res => {
          alert('Se realizo la actualizacion')
          const ref = document.getElementById('cancel')
          ref?.click()
          { document.location.reload() }
          this.getServiciosAndAlumnos()
        }, err => {
          console.log(err)
          alert('No se pudo actualizar, revise la cantidad de caracteres ingresados')
        })
    }
  }
}
