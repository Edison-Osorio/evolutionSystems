import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '@modules/admin/services/servicios/servicios.service';
import { SolicitudesService } from '@modules/admin/services/solicitudes/solicitudes.service';

@Component({
  selector: 'app-solicitudes',
  templateUrl: './solicitudes.component.html',
  styleUrls: ['./solicitudes.component.css']
})
export class SolicitudesComponent implements OnInit {

  constructor(private solicitudesService: SolicitudesService, private serviciosServices: ServiciosService) { }

  hiddenA:boolean=true
  t:any=0
  mensaje:any='No hay solicitudes '
  solicitudes: any = []
  solicitudesA: any = []
  alumno_servicio: any = {
    codigo_servicio_as: 0,
    id_alumno_as: 0
  }
  total:any=[]

  ngOnInit(): void {
    this.getSolicitudes()
    this.totalSolicitudes()
  }

  // obtiene las solicitudes
  getSolicitudes() {
    this.solicitudesService.getSolicitudes().subscribe(
      res => {
        this.solicitudes = res
        this.hiddenA=false
      }, err => console.log(err)
    )
  }

  //le asigna el servicio al alumnno
  createAlu_ser(id_alumno: any, id_servicio: any,id_mensaje:any) {
    this.alumno_servicio.id_alumno_as = id_alumno
    this.alumno_servicio.codigo_servicio_as = id_servicio
    if (confirm('¿ Esta seguro de asignarle este servicio al alumno ?')) {
      this.serviciosServices.createAlumno_servicio(this.alumno_servicio).subscribe(
        res => {
          alert('Se le ha asignado con exito')
          { document.location.reload() }
        },
        err => {
          console.log(err)
        }
      )
      this.solicitudesService.eliminarSolicitud(id_mensaje).subscribe(
        res=>{
          console.log('se elimino');
        },err=>console.log(err)
      )
    } else {
      alert('Se cancelo con  exito')
    }
  }

  //eliminar solicitud
  deleteSolicitud(id_mensaje:any){
    if (confirm('¿ Esta seguro de eliminar esta solicitud ?')) {
      this.solicitudesService.eliminarSolicitud(id_mensaje).subscribe(
        res=>{
          alert('Se elimino esta solicitud ')
          {document.location.reload()}
        },err=>console.log(err)
      )
    } else {
      alert('Se cancelo la eliminacion')
    }
  }

  // obtiene el total de las solicitudes
  totalSolicitudes(){
    this.solicitudesService.contarSolicitudes().subscribe(
      (res:any)=>{
        this.solicitudesA=res
        this.t=this.solicitudesA[0].total
        if (this.t!=0) {
          this.hiddenA=false
          this.total=res
        } else {
          this.hiddenA=true
        }
      }
    )
  }

}


