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
  asignaturas: any = [];

  periodos: any = [];

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
    fec_alu: Date,
    nom_pa: '',
    nom_ma: '',
    dat_ban_alu: '',
    id_curso: '',
    id_periodo: '',
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
    this.getPeriodos();
  }

  getCursos() {
    this.cursoService.listCurso().subscribe((res: any) => {
      this.cursos = res;
    });
  }

  getPeriodos() {
    this.alumnoService.getTrimestres().subscribe((res: any) => {
      this.periodos = res;
    });
  }

  insertAlumno() {
    const {id_periodo} = this.alumno;

    delete this.alumno.id_periodo

    console.log('Iniciamos la inserción');

     this.alumnoService.createAlumno(this.alumno).subscribe((res: any) => {});
     alert('Se ha registrado el alumno');

     this.alumnoService.createUser(this.user).subscribe((res: any) => {});
     alert('Se ha registrado el alumno');
     let ref = document.getElementById('cancel');
     ref?.click();
    console.log('Este es el objeto de alumno --> ', this.alumno);

    this.cursoService
      .getAsignaturaCurso(this.alumno.id_curso)
      .subscribe((res: any) => {
        this.asignaturas = res;
        console.log('Esta es la respuesta del servidor -->', res);

        console.log('Inicia for each');

        for (let codigo_asignatura of this.asignaturas) {
          console.log(
            'Este es el codigo de las asignaturas --> ',
            codigo_asignatura
          );

          console.log('VARIABLE DE ID PERIODO --> ', id_periodo);

          const nota: any = {
            id_asi: codigo_asignatura.id_asi,
            id_alu: this.alumno.id_alu,
            id_periodo: id_periodo,
          };

          console.log('Este es el objeto de nota --> ', nota);

           this.alumnoService.createNota(nota).subscribe((res: any) => {
             console.log(res);
           });
          console.log(
            `INSERT INTO notas(id_asi, id_alu, id_periodo) values (${codigo_asignatura.id_asi}, ${this.alumno.id_alu}, ${id_periodo})`
          );
          // document.location.reload();
        }
      });
  }
}
