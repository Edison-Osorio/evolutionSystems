import { Component, OnInit } from '@angular/core';
import { StudentsService } from '@modules/students/services/students.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { NotaService } from '@shared/services/nota/nota.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  informacion: any = [];
  notas:any = [];
  constructor(private studentsService:StudentsService,private notaService:NotaService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.alumnoToken()
    this.getNotas()
  }
  alumnoToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token)

    return decodetoken.documento
  }

  getNotas(){
    this.notaService.listNotasAlumno(this.alumnoToken()).subscribe(
      res => {
        this.notas = res;
        console.log(res)
      }
    )
  }
 


}
