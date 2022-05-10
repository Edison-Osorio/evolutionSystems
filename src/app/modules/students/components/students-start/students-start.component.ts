import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
@Component({
  selector: 'app-students-start',
  templateUrl: './students-start.component.html',
  styleUrls: ['./students-start.component.css']
})
export class StudentsStartComponent implements OnInit {

  constructor(private studentService: StudentsService, private cookie: CookieService) { }
  alumno: any = []
  hidden: boolean = false
  informacionBeca: any = []
  alumnoGrado: any = []
  ngOnInit(): void {
    this.becaAlumno()
    this.studentService.getStudent(this.alumnoToken()).subscribe(
      res => {
        this.alumno = res  
      }
    )
    this.studentService.getStudentWhitGrado(this.alumnoToken()).subscribe(
      res => {
        this.alumnoGrado = res
      }
    )
  }

  becaAlumno() {
    this.studentService.getBecaAlumno(this.alumnoToken()).subscribe(
      (res: any) => {
        if (res) {
          this.informacionBeca = res
          this.hidden = true
        } else {
          this.hidden = true
        }
      }
    )
  }


  alumnoToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token)

    return decodetoken.documento
  }

}
