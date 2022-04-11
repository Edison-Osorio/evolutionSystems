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
  id_alu:1,
  nom_alu:'',
  dire_alu:'',
  tel_alu:0,
  fec_alu: new Date ,
  nom_pa:'',
  nom_ma:'',
  dat_ban_alu: 0,
  cod_grado:'0'
}

user:User ={
    tipoDocumento:'1',
    documento: '',
    nombre:'',
    contrasena:'',
    email:''
  }


  grados: any = []

  url= 'http://localhost:3000/api/admin/grado'

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }



}
