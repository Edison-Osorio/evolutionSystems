import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  alumnos: any = []

  constructor(private alumnoService: AlumnoService) { }

  ngOnInit(): void {
    
    this.alumnoService.getAlumnos().subscribe(
      (res:any)=>{
        this.alumnos = res

        console.log(res);
        
      }
    )    

  }
  codigoAlumno(codigo: number){
    return codigo
  }

  codigo(){
    return this.codigoAlumno
  }

}
