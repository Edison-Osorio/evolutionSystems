import { AdminService } from '@modules/admin/services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { Observable, window } from 'rxjs';
import { Docente } from '@core/models/Docente';
import { User } from '@core/models/User';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-registrodo',
  templateUrl: './registrodo.component.html',
  styleUrls: ['./registrodo.component.css']
})
export class RegistrodoComponent implements OnInit {
  docente: Docente = {
    nif_doc: '',
    area_doc: '',
    nom_doc: '',
    dir_doc: '',
    fec_nac_doc: Date,
    tel_doc: '',
    dat_ban_doc: ''
  }
  user: User = {
    tipoDocumento: '1',
    documento: '',
    nombre: '',
    contrasena: '',
    email: '',
    rol: 'docente'
  }

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  createDocente() {
    this.adminService.createDocente(this.docente).subscribe(
      res => {
        console.log('se realizo una insercion --->', res)
        //{ document.location.reload() }
      },
      err => console.error(err)
    )
  }
  createUser() {
    this.adminService.createUser(this.user).subscribe(
      res => {
          console.log('Usuario registrado', res)
      },
      err => console.error(err)
    )
  }


}
