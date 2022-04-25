import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin/admin.service';
import { DatePipe } from '@angular/common';
import { HorarioService } from '@modules/admin/services/horario.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css']
})
export class HorarioComponent implements OnInit {
  constructor(private horarioService: HorarioService, private activedRoute: ActivatedRoute, private dateFormat: DatePipe) { }
  horarios: any = []
  Horario: any = {
    cod_hor: '',
    horario: Date
  }
  ngOnInit(): void {
    this.horarioService.getHorario().subscribe(
      res => {
        this.horarios = res;
      },
      err => console.log(err)
    )
  }

  createHorario() {
    this.horarioService.crateHorario(this.Horario).subscribe(
      res => {
        { document.location.reload() }
      },
      err => console.log('error ---->', err)
    )
  }

  deleteHorario(cod_hor: any) {
    this.horarioService.deleteHorario(cod_hor).subscribe(
      res => {
        { document.location.reload() }
      },
      err => console.log('error', err)
    )
  }

  getOneHorario(cod_hor: any) {
    this.horarioService.getOnoHorario(cod_hor)
      .subscribe(res => {
        this.Horario = res;
      },
        err => console.log(err)
      )
  }

  updateHorario() {
    this.horarioService.updateHorario(this.Horario.cod_hor, this.Horario).subscribe(
      res => {
        this.Horario = res
        { document.location.reload() }
      }, err => console.log(err)
    )
  }
}