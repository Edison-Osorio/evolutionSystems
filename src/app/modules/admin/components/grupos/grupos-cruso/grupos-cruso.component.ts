import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursoService } from '@modules/admin/services/curso.service';

@Component({
  selector: 'app-grupos-cruso',
  templateUrl: './grupos-cruso.component.html',
  styleUrls: ['./grupos-cruso.component.css'],
})
export class GruposCrusoComponent implements OnInit {
  constructor(
    private cursoService: CursoService,
    private activedRoute: ActivatedRoute
  ) {}

  showGrupos !:boolean

  grupos: any = [];

  ngOnInit(): void {
    // this.getGrupos()
  }

  getGrupos() {
    const params = this.activedRoute.snapshot.params;
     this.cursoService.listOnCursoGrupos(params['id_curso']).subscribe(
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

  cursoEmitido(){
    this.cursoService.cursoEmitido.emit(this.grupos)
  }
}
