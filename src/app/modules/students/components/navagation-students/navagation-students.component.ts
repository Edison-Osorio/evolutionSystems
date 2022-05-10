import { StudentsService } from './../../services/students.service';
import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navagation-students',
  templateUrl: './navagation-students.component.html',
  styleUrls: ['./navagation-students.component.css'],
})
export class NavagationStudentsComponent implements OnInit {
  informacion: any = [];
  nameStudent: any;
  constructor(
    private studentsService: StudentsService,
    private cookie: CookieService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.information();
    this.listNumberAlumno();
  }
  information() {
    const token = this.cookie.get('token');

    let decodetoken: any = {};
    decodetoken = decode(token);

    this.informacion = decodetoken;
  }

  listNumberAlumno() {
    this.studentsService
      .getStudent(this.informacion.documento)
      .subscribe((res: any) => {
        this.nameStudent = res.nombre_alumno;
      });
  }

  salir() {
    this.cookie.delete('token', '/');
    this.router.navigate(['/']);
  }
}
