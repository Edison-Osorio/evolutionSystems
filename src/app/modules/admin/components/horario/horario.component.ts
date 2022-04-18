import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin/admin.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  constructor(private adminService:AdminService,private activedRoute: ActivatedRoute) { }
  horarios:any=[]
  Horario:any={
    cod_hor: '',
    horario: ''
  }
  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    this.adminService.getHorario().subscribe(
      res=>{
        this.horarios=res;
      },
      err=> console.log(err)
    )
  }

  createHorario(){
    this.adminService.crateHorario(this.Horario).subscribe(
      res=>{
        console.log('se creo el horario');
        {document.location.reload()}
      },
      err=>console.log('error ---->', err)
    )
  }

  deleteHorario(cod_hor: any){
    this.adminService.deleteHorario(cod_hor).subscribe(
      res=>{
        console.log('se elimino este horario', cod_hor)
        {document.location.reload()}
      },
      err=>console.log('error', err)
    )
  }

}
