import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin/admin.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  constructor(private adminService: AdminService, private activedRoute: ActivatedRoute,private dateFormat:DatePipe) { }
  horarios: any = []
  Horario: any = {
    cod_hor: '',
    horario: ''
  }
  ngOnInit(): void {
    
    this.adminService.getHorario().subscribe(
      res => {
        this.horarios = res;
      },
      err => console.log(err)
    )
  }

  refresh(){
    this.Horario.cod_hor = ''
    this.Horario.horario = ''
  }

  createHorario() {
    this.adminService.crateHorario(this.Horario).subscribe(
      res => {
        console.log('se creo el horario');
        { document.location.reload() }
      },
      err => console.log('error ---->', err)
    )
  }

  deleteHorario(cod_hor: any) {
    this.adminService.deleteHorario(cod_hor).subscribe(
      res => {
        console.log('se elimino este horario', cod_hor)
        { document.location.reload() }
      },
      err => console.log('error', err)
    )
  }

  getOneHorario(cod_hor:any) {
    this.adminService.getOnoHorario(cod_hor)
      .subscribe(res => {
        console.log(res)
        this.Horario = res;
        //delete this.Horario.horario;
        this.Horario.horario=this.dateFormat.transform(this.Horario.horario, 'medium')
        console.log(this.Horario)
        
      },
        err => console.log(err)
      )
  }

  updateHorario() {
    this.adminService.updateHorario(this.Horario.cod_hor, this.Horario).subscribe(
      res => {
        console.log(res)
        this.Horario=res
        console.log(this.Horario)
        {document.location.reload()}
      }
    )


  }
}
