import { AdminService } from '@modules/admin/services/admin/admin.service';
import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Alumno } from '@core/models/Alumno';
import { User } from '@core/models/User';

@Component({
  selector: 'app-insert-alumno',
  templateUrl: './insert-alumno.component.html',
  styleUrls: ['./insert-alumno.component.css']
})
export class InsertAlumnoComponent implements OnInit {


UserA:Alumno = {
  id_alu:'',
  nom_alu:'',
  dire_alu:'',
  tel_alu:'',
  fec_alu: new Date ,
  nom_pa:'',
  nom_ma:'',
  dat_ban_alu: '',
  cod_gra:'0'
}

user:User ={
    tipoDocumento:'1',
    documento: '',
    nombre:'',
    contrasena:'',
    email:'',
    rol:'alumno'
  }


  grados: any = []

  url= 'http://localhost:3000/api/admin/grado'

  constructor(private http: HttpClient, private adminService:AdminService) { }

  ngOnInit(): void {
    this.adminService.getGrados().subscribe(
      res => {
        console.log(res)
        this.grados = res;
      },
      err => console.error(err)
    )
  }

  createAlumno(){
    this.adminService.createAlumno(this.UserA).subscribe(
      res => {
        console.log('se realizo una insercion --->', res)
        { document.location.reload() }
      },
      err => console.error(this.UserA)
    )
  }
  createUser() {
    this.adminService.createUser(this.user).subscribe(
      res => {
          console.log('Usuario registrado', res)
      },
      err => console.error(err)
    )
  }



}
