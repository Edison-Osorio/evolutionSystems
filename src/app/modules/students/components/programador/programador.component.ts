import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css'],
})
export class ProgramadorComponent implements OnInit {
  horario: any = [];
  grado:any
  dia: any = '';
  horarioDia: any = [];
  informacion: any = [];
  constructor(
    private studentsService: StudentsService,
    private cookie: CookieService
  ) {}
  newH: any;
  ngOnInit(): void {
    this.getHorario();
    this.alumnoToken();
    this.getGrado()
  }
  // obtiene el horario del alumno
  getHorario() {
    this.studentsService.getHorario(this.alumnoToken()).subscribe((res) => {
      this.horario = res;
      this.horarioDia = res;
      
    });
  }

  getGrado(){
    this.studentsService.getGradoAlumno(this.alumnoToken()).subscribe((res:any)=>{

      const grados = res.nombre_grado
      const grupo = res.nombre_grupo

      this.grado = `${grados} ${grupo}`     
    })
  }

  onSelectDia(nombre_dia: any) {
    const { value } = nombre_dia;
    if (this.dia == '') {
      this.horarioDia = this.horario;
    } else {
      this.horarioDia = this.horario.filter((item: any) => item.dia == value);
    }
  }

  alumnoToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    return decodetoken.documento;
  }
}
