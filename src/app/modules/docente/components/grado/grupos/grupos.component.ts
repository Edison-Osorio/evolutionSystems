import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';
import { NotaService } from '@shared/services/nota/nota.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {
  grupos: any = [];
  hidden: boolean = false;
  estudiantes: any = [];

  constructor(
    private docenteService: DocenteService,
    private notaService:NotaService,
    private cookie: CookieService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // this.decodeToken();
    this.listGrupos();
  }
  
  listGrupos() {
    const {id_grado} = this.activedRoute.snapshot.params
    this.docenteService.listGruposGrado(id_grado).subscribe((res: any) => { 
      this.grupos = res.query2;
      // this.GrupoAEmitir()
    });
  }


}
