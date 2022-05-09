import { Component, OnInit } from '@angular/core';
import { StudentsService } from '@modules/students/services/students.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { DatePipe } from '@angular/common';
import { Alumno } from '@core/models/Alumno';
import { User } from '@core/models/User';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';

@Component({
  selector: 'app-student-information',
  templateUrl: './student-information.component.html',
  styleUrls: ['./student-information.component.css']
})
export class StudentInformationComponent implements OnInit {

  constructor(private studenService: StudentsService, private cookie: CookieService, private dateFormat: DatePipe, private alumnoService: AlumnoService) { }

  estudiante: Alumno = {
    dato_banco_alumno: '',
    direccion_alumno: '',
    fecha_nacimiento: '',
    id_alumno: '',
    nombre_alumno: '',
    nombre_mama: '',
    nombre_papa: '',
    telefono_alumno: ''
  }

  user: User = {
    tipoDocumento: '',
    email: ''
  }

  ngOnInit(): void {
    this.alumnoToken()
    this.studenService.getStudent(this.alumnoToken()).subscribe(
      res => {
        //console.log(res)
        this.estudiante = res
        this.estudiante.fecha_nacimiento = this.dateFormat.transform(
          this.estudiante.fecha_nacimiento,
          'yyyy-MM-dd',
        )
      }, err => console.log(err));
    this.alumnoService.getOneUsuario(this.alumnoToken()).subscribe(
      (res: any) => {
        //console.log(res);
        const { email, tipoDocumento } = res;
        this.user.tipoDocumento = tipoDocumento;
        this.user.email = email;
      }
    )

  }

  updateAlumno() {
    if (confirm('¿Esta seguro de actualizar sus datos?')) {
      this.alumnoService.updateAlumno(this.alumnoToken(), this.estudiante).subscribe(
        res => {
          console.log('Se actualizaron sus datos')
        }, err => console.log(err)
      )
      this.alumnoService.updateUser(this.alumnoToken(), this.user).subscribe(
        res => {
          alert('Datos actualizados')
        }
      )
    }
  }

  alumnoToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token)

    return decodetoken.documento
  }
}
