import { Component, OnInit } from '@angular/core';
import { Docente } from '@core/models/Docente';
import { User } from '@core/models/User';
import { DocenteService } from '@modules/admin/services/docente.service';

@Component({
  selector: 'app-insert-docente',
  templateUrl: './insert-docente.component.html',
  styleUrls: ['./insert-docente.component.css'],
})
export class InsertDocenteComponent implements OnInit {
  categorias: any = [];

  docente: Docente = {
    nif_doc: '',
    titulo: '',
    nom_doc: '',
    dir_doc: '',
    fec_nac_doc: Date,
    tel_doc: '',
    dat_ban_doc: '',
    id_categoria: '',
  };
  user: User = {
    tipoDocumento: '1',
    documento: '',
    nombre: '',
    contrasena: '',
    email: '',
    rol: 'docente',
  };

  constructor(private docenteService: DocenteService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.docenteService.getCategorias().subscribe((res: any) => {
      this.categorias = res;

    });
  }

  createDocente() {
    this.docenteService.createDocente(this.docente).subscribe(
      (res) => {},
      (err) => console.error(err)
    );
    this.docenteService.createUser(this.user).subscribe(
      (res) => {
        alert('Se realizó la insercion de nuevo Docente');
        document.location.reload();
      },
      (err) => console.error(err)
    );
  }
}
