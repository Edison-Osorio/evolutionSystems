import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { ServiciosService } from '@modules/admin/services/servicios/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {
  servicios: any = []
  a: any = []
  serviciosAlumno: any = []
  disabled: boolean = true
  mensaje: any = {
    mensaje: '',
    id_alumno_m: '',
    id_servicio_m: 0
  }

  constructor(private studentsService: StudentsService, private cookie: CookieService) { }
  ngOnInit(): void {
    this.alumnoToken()
    this.getServicios()
    this.servicioAlumno()

  }
  refresh(){
    this.mensaje.mensaje= ''
    this.mensaje.id_servicio_m = 0
  }

  servicioAlumno() {
    this.studentsService.getServiciosAlumno(this.alumnoToken()).subscribe(
      res => {
        this.serviciosAlumno = res
      }
    )
  }
  //this.getServicioscom()
  getServicios() {
    this.studentsService.alumnoOutService(this.alumnoToken()).subscribe(
      res => {
        this.servicios = res;
      }
    )
  }



  alumnoToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token)

    return decodetoken.documento
  }

  guardarSolicitud() {
    this.mensaje.id_alumno_m = this.alumnoToken()
    if (confirm('¿ Esta seguro de enviar esta solicitud ?')) {
      this.studentsService.guardarSolicitud(this.mensaje).subscribe(
        res => {
          alert('Se envio la solicitud del servicio')
          this.refresh()
        }, err => console.log(err)
      )
    } else {
      alert('Se cancelo la solicitud')
    }
  }

}
