import { Component, OnInit } from '@angular/core';
import { ServiciosService } from '@modules/admin/services/servicios.service';

@Component({
  selector: 'app-alumno-servicio',
  templateUrl: './alumno-servicio.component.html',
  styleUrls: ['./alumno-servicio.component.css']
})
export class AlumnoServicioComponent implements OnInit {

  constructor(private Services: ServiciosService) { }
  alumno_servicio: any = []

  ngOnInit(): void {
    this.getAlu_Ser();
  }
  getAlu_Ser() {
    this.Services.getAlu_Ser().subscribe(
      res => {
        this.alumno_servicio = res
      },err=> console.error(err)
    )
  }

  deleteAlu_ser(id_alu: any, cod_ser: any) {
    if (confirm('¿Esta seguro de eliminarle este servicio al este alumno?')) {
      this.Services.deleteAlu_Ser(id_alu, cod_ser).subscribe(
        res => {
          alert('Se le elimno el servicio al alumno ')
          { window.location.reload() }
        }
      )
    }
  }

}
