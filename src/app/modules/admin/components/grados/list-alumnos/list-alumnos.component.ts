import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-alumnos',
  templateUrl: './list-alumnos.component.html',
  styleUrls: ['./list-alumnos.component.css']
})
export class ListAlumnosComponent implements OnInit {

  alumnos: any = []

  constructor(private alumnoService:AlumnoService,private activatedRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.listAlumnos()
  }

  listAlumnos(){
    const {id_grado, id_grupo} = this.activatedRouter.snapshot.params
    console.log('esson son los identificadores --> ', id_grado, id_grupo);

    this.alumnoService.listAlumnoGradoGrupo(id_grado, id_grupo).subscribe(
      (res:any)=>{
        console.log('Está es la respuesta --> ', res);
        this.alumnos = res
        
      }
      // console.log('esta es la longitud de un array');
      
    )
    
  }

}
