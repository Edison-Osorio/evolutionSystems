import { AdminService } from '@modules/admin/services/admin/admin.service';
import { Grado } from './../../../../../core/models/Grado';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  grado: Grado = {
    cod_gra: '',
    rango_grad: '',
    carac_grad: '',
    nom_grad: '',
    plan_grad: '',
    desc_grad: '',
    imagen:''
  }
  constructor(private adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
  }
  createGrado(){
    this.adminService.createGrado(this.grado).subscribe(
      res=>{
        console.log(res)
        console.log('grado creado')
        //this.router.navigate(['/admin/grupos'])
        {document.location.reload()}
      },
      err=>console.log(err)
    )
  }

}
