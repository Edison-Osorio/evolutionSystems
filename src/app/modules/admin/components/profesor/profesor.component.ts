import { AdminService } from './../../services/admin/admin.service';
import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';
import { Docente } from '@core/models/Docente';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit {
  docente: any = [];
  docent: Docente = {
    nif_doc: '',
  }

  constructor(private adminService: AdminService, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getDocente()
  }

  refresh(): void { document.location.reload() }

  getDocente() {
    this.adminService.getDocente().subscribe(
      res => {
        this.docente = res;
      },
      err => console.log(err)
    )
  }

  getOneDocente(nif_doc: string | number) {
      this.adminService.getOneDocente(nif_doc).subscribe(
        res => {
          this.docente = res;
        },
        err => (err)
      )
  }

  deleteDocente(nif_doc: number) {
    this.adminService.deleteDocente(nif_doc).subscribe(
      res => {
        console.log('docente eliminado', nif_doc)
        document.location.reload()
      },
      err => console.log(err, nif_doc)
    )
  }
}
