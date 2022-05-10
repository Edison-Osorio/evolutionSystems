import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Docente } from '@core/models/Docente';

import { DocenteService } from '@modules/admin/services/docente/docente.service';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css'],
})
export class DocenteComponent implements OnInit {
  docente: any = [];
  docent: Docente = {
    nif_docente: '',
  };
  mensaje: any = 'Docente no encontrado'

  constructor(
    private docenteService: DocenteService,
    private activedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getDocente();
  }

  refresh(): void {
    document.location.reload();
  }

  // Obtenemos los docentes
  getDocente() {
    this.docenteService.getDocente().subscribe(
      (res) => {
        this.docente = res;
      },
      (err) => console.log(err)
    );
  }

  // Emitimos el valor para actualizar
  codigoDocente(codigo: number) {
    this.docenteService.codigoDocente.emit({ codigo });
  }

  getOneDocente(nif_doc: string | number) {
    this.docenteService.getUnDocente(nif_doc).subscribe(
      (res) => {
        this.docente = res
        if (this.docente[0] == null) {
          this.mensaje
          alert(this.mensaje)
        }
      },
      (err) => err
    );
  }

  deleteDocente(nif_docente: number) {
    if (
      confirm(
        `¿Esta seguro de eliminar a el docente con documento = ${nif_docente}?`
      )
    ) {
      this.docenteService.deleteDocente(nif_docente).subscribe(
        (res) => {
          this.docenteService.deleteUser(nif_docente).subscribe((res) => {
            alert(`Docente con el documento ${nif_docente} fue eliminado`);
            document.location.reload();
          });
        },
        (err) => alert('Ocurrio un error y no se pudo eliminar el docente ')
      );

    }
  }
}
