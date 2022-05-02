import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GradoService } from '@modules/admin/services/grado/grado.service';

@Component({
  selector: 'app-list-grupos',
  templateUrl: './list-grupos.component.html',
  styleUrls: ['./list-grupos.component.css']
})
export class ListGruposComponent implements OnInit {
  constructor(
    private gradoService: GradoService,
    private activedRoute: ActivatedRoute
  ) {}

  showGrupos !:boolean

  grupos: any = [];

  ngOnInit(): void {
    this.getGrupos()
  }

  getGrupos() {
    const params = this.activedRoute.snapshot.params;
     this.gradoService.listGruposGrado(params['id_grado']).subscribe(
       (res:any)=>{
            if (res.length ==[]) {
              this.showGrupos = false
            } else {
              this.showGrupos = true
              this.grupos = res
            }
       }
     )
  }

  gradoEmitido(){
    this.gradoService.gradoEmitido.emit(this.grupos)
  }

}
