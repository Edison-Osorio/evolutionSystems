import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  alumnos : any 
  identificador:any

  constructor(private docenteService:DocenteService, private  activatedRoute:ActivatedRoute) { }
  ngOnInit(): void {
    this.listAlumnosGradoGrupo()
  }

  listAlumnosGradoGrupo(){
    const {id_grado, id_grupo} = this.activatedRoute.snapshot.params
    this.identificador = id_grado 
   this.docenteService.listAlumnoGradoGrupo(id_grado,id_grupo).subscribe(
     (res:any )=>{
       this.alumnos = res
     }
   )
  }

}
