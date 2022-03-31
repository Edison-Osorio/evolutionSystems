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
    this.getGrado()
  }

  getGrado(){

     const res = [ {
       "cod_gra": 2,
       "rango_grad": "2-5",
       "carac_grad": "jovenes",
       "nom_grad": "primero",
       "plan_grad": "N/A",
       "desc_grad": "N/A"
     },  {
       "cod_gra": 3,
       "rango_grad": "2-5",
       "carac_grad": "jovenes",
       "nom_grad": "primeroA",
       "plan_grad": "N/A",
       "desc_grad": "N/A"
     },  {
       "cod_gra": 4,
       "rango_grad": "2-5",
       "carac_grad": "jovenes",
       "nom_grad": "primeroB",
       "plan_grad": "N/A",
       "desc_grad": "N/A"
     },  {
       "cod_gra": 5,
       "rango_grad": "2-5",
       "carac_grad": "jovenes",
       "nom_grad": "primeroC",
       "plan_grad": "N/A",
       "desc_grad": "N/A"
     }]

    // this.http.get(this.url).subscribe(
    //   res =>{
    //     console.log(res);
        
    //     this.grados = res

    //     console.log('esta es la variable de this.grados---->',this.grados);
        
    //   }
    // )
console.log(res);

    this.grados = res
    console.log('esta es la variable de this.grados---->',this.grados);

  }


  enviar(){
    console.log('este es el usuario la tabla Alumno ->',this.UserA);

    this.user.nombre = this.UserA.nom_alu
    this.user.documento = this.UserA.id_alu
    console.log('Este es el usuario de la table Usuario', this.user);
    
    
  }

}
