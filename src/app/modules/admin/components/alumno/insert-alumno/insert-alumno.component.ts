import { Alumno } from '@core/models/Alumno';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@core/models/User';
import { CursoService } from '@modules/admin/services/curso.service';
import { AlumnoService } from '@modules/admin/services/alumno.service';

@Component({
  selector: 'app-insert-alumno',
  templateUrl: './insert-alumno.component.html',
  styleUrls: ['./insert-alumno.component.css'],
})
export class InsertAlumnoComponent implements OnInit {
  cursos: any = [];

  grupos: any = [];

  user: User = {
    tipoDocumento: '1',
    documento: '',
    nombre: '',
    contrasena: '',
    email: '',
    rol: 'estudiante',
  };

  alumno: Alumno = {
    id_alu: '',
    nom_alu: '',
    dire_alu: '',
    tel_alu: '',
    fec_alu: new Date(),
    nom_pa: '',
    nom_ma: '',
    dat_ban_alu: '',
    id_curso: '',
    id_grupo: '',
  };



  // @Output() onCodigo:EventEmitter<number> = new EventEmitter

  // enviarCodigo(){
  //   this.onCodigo.emit(this.codigo)
  // }

  constructor(private cursoService: CursoService, private alumnoService:AlumnoService) {}

  ngOnInit(): void {
    this.getCursos();
    this.getGrupos();
  }

  getCursos() {
    this.cursoService.listCurso().subscribe((res: any) => {
      this.cursos = res;
      
    });
  }

  getGrupos() {
    this.cursoService.getGrupo().subscribe((res: any) => {
      this.grupos = res;
      
    });
  }

  insertAlumno(){
    console.log('Este es el objeto de Alumno'); 
    console.log(this.alumno);
    this.alumnoService.createAlumno(this.alumno).subscribe(
      (res:any)=>{
        console.log(res);
        
      }
    )
    console.log('Este es el objeto de Usuario');
    console.log(this.user);
    this.alumnoService.createUser(this.user).subscribe(
      (res:any)=>{
        console.log(res);
        
      }
    )
    alert('Se ha registrado el alumno')
    document.location.reload()
    
    
    
  }

}
