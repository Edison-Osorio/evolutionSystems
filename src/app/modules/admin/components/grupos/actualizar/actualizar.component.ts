import { ActivatedRoute } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Grado } from './../../../../../core/models/Grado';
@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.css']
})
export class ActualizarComponent implements OnInit {
  grado: any = {
    cod_gra: '',
    rango_grad: '',
    carac_grad: '',
    nom_grad: '',
    plan_grad: '',
    desc_grad: '',
    imagen:''
  }
  //edit: boolean=true
  constructor(private adminService: AdminService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['cod_gra']) {
      this.adminService.getGrado(params['cod_gra']).subscribe(
        res => {

          this.grado=res
        },
        err => console.log(err)
      )
    }
  }

  updateGrado(){
    this.adminService.updategrado(this.grado.cod_gra,this.grado).subscribe(
      res=>{
        console.log(res),
        console.log(this.grado)
      },
      err=>console.log(err)
    )
  }


}
