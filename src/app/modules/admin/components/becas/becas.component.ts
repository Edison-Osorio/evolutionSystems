import { Component, OnInit } from '@angular/core';
import { BecaService } from '@modules/admin/services/becas/beca.service';


@Component({
  selector: 'app-becas',
  templateUrl: './becas.component.html',
  styleUrls: ['./becas.component.css']
})
export class BecaComponent implements OnInit {

  constructor(private becaService: BecaService) { }
  becas: any = [];

  beca: any = {
    //codigo_beca: '',
    descripcion: '',
    cupo: '',

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
    console.log('Este es el metodo de crear la beca');
    console.log('Esta es lo que se envia ', this.beca);
    
    
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
    if (confirm(`¿ Esta seguro de actualizar la beca con codigo = ${this.beca.codigo_beca}?`)) {
      this.becaService.updateBeca(this.beca.codigo_beca, this.beca).subscribe(
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
