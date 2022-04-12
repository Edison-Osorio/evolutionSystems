import { Docente } from '@core/models/Docente';
import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';

import decode from 'jwt-decode';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css'],
})
export class InformationsComponent implements OnInit {
  user: any = {
    nif_doc: '',
    area_doc: '',
    nom_doc: '',
    dir_doc: '',
    fec_nac_doc: Date,
    tel_doc: '',
    dat_ban_doc: '',
  };
  constructor(
    private cookie: CookieService,
    private docenteService: DocenteService,
    private dateFormat: DatePipe
  ) {}

  ngOnInit(): void {
    this.docenteService.getDocente(this.decodeToken()).subscribe((res: any) => {
      this.user = res;
      this.user.fec_nac_doc = this.dateFormat.transform(
        this.user.fec_nac_doc,
        'yyyy-MM-dd'
      );
    });
    this.decodeToken();
  }

  updateUser() {
    const id = this.user.nif_doc;
    delete this.user.nif_doc;
    delete this.user.nom_doc;
    delete this.user.fec_nac_doc;
    this.docenteService.updateUser(id, this.user).subscribe(
      (res: any) => {
        console.log(res);
        console.log('Se actualizo la información');
        alert('Se actualizo la información con exito')
        document.location.reload();
      },
      (err) => {
        console.log('Ocurrio un error ���� ', err);
      }
    );
  }

  // Se obtiene el identificador del usuario
  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    return decodetoken.documento;
  }
}
