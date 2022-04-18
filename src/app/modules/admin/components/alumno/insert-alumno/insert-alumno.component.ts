import { Alumno } from '@core/models/Alumno';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@core/models/User';
import { CursoService } from '@modules/admin/services/curso.service';
import { AlumnoService } from '@modules/admin/services/alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insert-alumno',
  templateUrl: './insert-alumno.component.html',
  styleUrls: ['./insert-alumno.component.css'],
})
export class InsertAlumnoComponent implements OnInit {
  cursos: any = [];
  alumnos: any = [];

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

  // enviarCodigo(){
  //   this.onCodigo.emit(this.codigo)
  // }

  constructor(
    private cursoService: CursoService,
    private alumnoService: AlumnoService,
    private router: Router
  ) {}

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

  insertAlumno() {
    this.alumnoService.createAlumno(this.alumno).subscribe((res: any) => {});
    this.alumnoService.createUser(this.user).subscribe((res: any) => {});
    alert('Se ha registrado el alumno');
    document.location.reload();
    let ref = document.getElementById('cancel');
    ref?.click();
  }
}
