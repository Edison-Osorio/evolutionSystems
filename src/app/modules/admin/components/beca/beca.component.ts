import { Component, OnInit } from '@angular/core';
import { BecaService } from '@modules/admin/services/beca.service';

@Component({
  selector: 'app-beca',
  templateUrl: './beca.component.html',
  styleUrls: ['./beca.component.css']
})
export class BecaComponent implements OnInit {

  constructor(private becaService: BecaService) { }
  becas: any = [];
  
  beca: any = {
    cod_beca: '',
    des_beca: '',
    cupo_beca: '',

  }
  //obtener todas las becas
  ngOnInit(): void {
    this.becaService.getBecas().subscribe(
      res => {
        this.becas = res
      }, err => console.log(err)
    )

  }

  //obteber uno
  getOne(cod_beca: any) {
    this.becaService.getOne(cod_beca).subscribe(
      res => {
        this.beca = res
        console.log(this.beca)
      }, err => console.log(err)
    )
  }

  // crear becas
  createBeca() {
    this.becaService.createBeca(this.beca).subscribe(
      res => {
        alert('se creo la beca')
        { document.location.reload() }
      }, err => alert('Codigo de la beca repetido o codigo de servicio inexistente')
    )
  }

  // eliminar becas
  deleteBeca(cod_beca: number) {
    if (confirm(`¿Esta seguro de eliminar esta beca con codigo = ${cod_beca} ?`)) {
      this.becaService.deleteBeca(cod_beca).subscribe(
        res => {
          { alert('Se elimino la beca') }
          { document.location.reload() }
        },
        err => console.log('error', err)
      )
    } else {
      alert('Se canselo la eliminacion')
      { document.location.reload() }
    }
  }

  // actualizar beca
  updateBeca() {
    if (confirm(`¿ Esta seguro de actualizar la beca con codigo = ${this.beca.cod_beca}?`)) {
      this.becaService.updateBeca(this.beca.cod_beca, this.beca).subscribe(
        res => {
          { alert('Se actualizo la beca') }
          { document.location.reload() }
        },
        err => console.log('error', err)
      )
    } else {
      alert('Se canselo la actualizacion')
      { document.location.reload() }
    }
  }

}
