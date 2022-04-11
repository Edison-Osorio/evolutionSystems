
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Docente } from '@core/models/Docente';
import { AdminService } from '@modules/admin/services/admin/admin.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-actualizardo',
  templateUrl: './actualizardo.component.html',
  styleUrls: ['./actualizardo.component.css']
})
export class ActualizardoComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  docent: any = [];
  docentes: Docente = {
    nif_doc: '',
    area_doc: '',
    nom_doc: '',
    dir_doc: '',
    fec_nac_doc: Date,
    tel_doc: '',
    dat_ban_doc: ''
  }
  edit: boolean = false
  constructor(private adminService: AdminService, private activedRoute: ActivatedRoute, private dateFormat:DatePipe, private router: Router) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params['nif_doc']) {
      this.adminService.getOneDocente(params['nif_doc']).subscribe(
        res => {
          this.docentes = res;
          this.edit = true;
          this.docentes.fec_nac_doc=this.dateFormat.transform(this.docentes.fec_nac_doc, 'yyyy-MM-dd')
          console.log(this.docentes)
        },
        err => console.log(err)
      )
    }
  }
  updateDocente() {

    this.adminService.updateDocente(this.docentes.nif_doc, this.docentes).subscribe(
      res => {
        console.log(res);
        console.log(this.docentes);
        this.router.navigate(['/admin/profesor'])
      },
      err => console.error(err)

    )

  }



}
