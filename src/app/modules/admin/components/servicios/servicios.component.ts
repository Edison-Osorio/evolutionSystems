import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin.service';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { ServiciosService } from '@modules/admin/services/servicios.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  constructor(private Services: ServiciosService, private alumService: AlumnoService) { }

  servicios: any = []
  alumnos: any = []
  alumno_servicio: any = []


  alu_ser: any = {
    cod_servicio: 0,
    id_alumno: 0
  }
  services:any={
    cod_ser:'',
    tipo_ser:'',
    desc_ser:'',
    valor:''
  }

  ngOnInit(): void {
    // this.getServiciosAndAlumnos()

  }

  getServiciosAndAlumnos(){
    this.Services.getServices().subscribe(
      res => {
        this.servicios = res;
      },
      err => console.log(err)
    )
    this.alumService.getAlumnos().subscribe(
      res => {
        this.alumnos = res;
      }, err => console.log(err)
    )

  }

  refresh() {
    this.alu_ser.cod_servicio = 0
    this.alu_ser.id_alumno = 0
  }

  createAlu_ser() {
    if (confirm('Esta seguro de asignarle este servicio al alumno')) {
    this.Services.createAlu_ser(this.alu_ser).subscribe(
      res => {
        const ref = document.getElementById('cancel')
        ref?.click()
        this.getServiciosAndAlumnos()
    },
      err => console.log(err)
    )
  }
  }

  getAlu_Ser() {
    this.Services.getAlu_Ser().subscribe(
      res => {
        this.alumno_servicio = res

      }
    )
  }

  getOneAlu_Ser(id_alumno:any,cod_servicio:any){
    this.Services.getOne(id_alumno,cod_servicio).subscribe(
      res=>{
        this.alu_ser=res
      },err=>console.log(err)
    )
  }

  getOneService(cod_ser:any){
    this.Services.getOneServices(cod_ser).subscribe(
      res=>{
        //console.log(res)
        this.services=res

      },err=>console.log(err)
    )
  }

  updateService(){
    if (confirm('Esta seguro de actualizar este servicio')) {
      this.Services.updateService(this.services.cod_ser,this.services).subscribe(
        res=>{
        alert('Se realizo la actualizacion')
        const ref = document.getElementById('cancel')
        ref?.click()
        this.getServiciosAndAlumnos()
      },err=>{console.log(err)
      alert('No se pudo actualizar, revise la cantidad de caracteres ingresados')
      })
    }

  }


}
