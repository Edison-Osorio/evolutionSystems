import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css']
})
export class ProgramadorComponent implements OnInit {
horario: any = [];
informacion: any = [];
  constructor(private studentsService: StudentsService, private cookie:CookieService) { }

  ngOnInit(): void {
    //this.getHorario()
   this.alumnoToken()
  }
  // getHorario (){
  //   this.studentsService.getProgamador().subscribe(
  //     res=>{
  //       this.horario=res;
  //       console.log(res)
  //     }
  //   )
  // }
  alumnoToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token)

    return decodetoken.documento
  }

}

