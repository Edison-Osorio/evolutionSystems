import { Component, OnInit } from '@angular/core';
import { StudentsService } from '@modules/students/services/students.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {
  informacion: any = [];
  notas:any = [];
  constructor(private studentsService:StudentsService, private cookie: CookieService) { }

  ngOnInit(): void {
    this.getNotas()
    this.alumnoToken()
  }

  getNotas(){
    this.studentsService.notas(this.alumnoToken()).subscribe(
      res => {
        this.notas = res;
        console.log(res)
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
