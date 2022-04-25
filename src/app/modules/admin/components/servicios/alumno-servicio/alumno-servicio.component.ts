import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno.service';
import { ServiciosService } from '@modules/admin/services/servicios.service';

@Component({
  selector: 'app-alumno-servicio',
  templateUrl: './alumno-servicio.component.html',
  styleUrls: ['./alumno-servicio.component.css']
})
export class AlumnoServicioComponent implements OnInit {

  constructor(private servicosServices: ServiciosService, private alumService: AlumnoService) { }
  alumno_servicio: any = []
  servicios: any = []
  alumnos: any = []

  ngOnInit(): void {
    this.getAlu_Ser();
    this.servicosServices.getServices().subscribe(
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
  getAlu_Ser() {
    this.servicosServices.getAlu_Ser().subscribe(
      res => {
        this.alumno_servicio = res
      },err=> console.error(err)
    )
  }

  deleteAlu_ser(id_alu: any, cod_ser: any) {
    if (confirm('¿Esta seguro de eliminarle este servicio al este alumno?')) {
      this.servicosServices.deleteAlu_Ser(id_alu, cod_ser).subscribe(
        res => {
          alert('Se le elimno el servicio al alumno ')
          { window.location.reload() }
        }
      )
    }
  }




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


  refresh() {
    this.alu_ser.cod_servicio = 0
    this.alu_ser.id_alumno = 0
  }

  createAlu_ser() {
    this.servicosServices.createAlu_ser(this.alu_ser).subscribe(
      res => { window.location.reload() },
      err => console.log(err)
    )
  }


  getOneAlu_Ser(id_alumno:any,cod_servicio:any){
    this.servicosServices.getOne(id_alumno,cod_servicio).subscribe(
      res=>{
        this.alu_ser=res
      },err=>console.log(err)
    )
  }

}
