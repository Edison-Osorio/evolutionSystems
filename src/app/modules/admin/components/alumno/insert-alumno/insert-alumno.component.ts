import { Alumno } from '@core/models/Alumno';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@core/models/User';
import { CursoService } from '@modules/admin/services/curso.service';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { Router } from '@angular/router';
import { GradoService } from '@modules/admin/services/grado/grado.service';

@Component({
  selector: 'app-insert-alumno',
  templateUrl: './insert-alumno.component.html',
  styleUrls: ['./insert-alumno.component.css'],
})
export class InsertAlumnoComponent implements OnInit {
  grados: any = [];
  alumnos: any = [];
  asignaturas: any = [];

  periodos: any = [];

  gruposCurso: any = [];
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
    id_alumno: '',
    nombre_alumno: '',
    direccion_alumno: '',
    telefono_alumno: '',
    fecha_nacimiento: Date,
    nombre_papa: '',
    nombre_mama: '',
    dato_banco_alumno: '',
    id_periodo: '',
  };

  matricula: any = {
    id_alumno_m: '',
    id_grado_m: '',
    id_grupo_m: '',
  };

  // enviarCodigo(){
  //   this.onCodigo.emit(this.codigo)
  // }

  constructor(
    // private cursoService: CursoService,
    private alumnoService: AlumnoService,
    private gradoService: GradoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getGrados();
    // this.getPeriodos();
    this.getGradosGrupos();
  }

  getGrados() {
    this.gradoService.listGrados().subscribe((res: any) => {
      this.grados = res;
    });
  }

  getGradosGrupos() {
    this.gradoService.listAllGradosGrupos().subscribe((res: any) => {
      this.grupos = res;
    });
  }

  getPeriodos() {
    this.alumnoService.getTrimestres().subscribe((res: any) => {
      this.periodos = res;
    });
  }

  //   onSelectCurso(id: any){
  //   const {value}= id
  // notas
  //   }
  onSelectGrupo(id: any) {
    const { value } = id;
    this.gruposCurso = this.grupos.filter(
      (item: any) => item.id_grado == value
    );
  }

  insertAlumno() {
    const { id_periodo } = this.alumno;

    delete this.alumno.id_periodo;

    // INSERTAMOS EN LA TABLA USUARIO
    this.alumnoService.createUser(this.user).subscribe(
      (res: any) => {
        // INSERTAMOS EN LA TABLA ALUMNO
        this.alumnoService.createAlumno(this.alumno).subscribe(
          (res: any) => {
            alert(res.msg);
            // INSERTAMOS EN LA TABLA DE MATRICULA
            this.alumnoService.createMatricula(this.matricula).subscribe(
              (res: any) => {
                alert(res.msg);
              },
              (err) =>
                alert(
                  'No se pudo crear el alumno, revise que no se este repitiendo el identificador'
                )
            );
          },
          (err) =>
            alert(
              'No se pudo crear el alumno, revise que no se este repitiendo el identificador'
            )
        );
      },
      (err) =>
        alert(
          'No se pudo crear el alumno, revise que no se este repitiendo el identificador'
        )
    );
    let ref = document.getElementById('cancel');
    ref?.click();
    // OBTENEMOS LAS ASIGNATURAS QUE PERTENECEN A ESTE EL GRADO INGRESADO
    // this.cursoService
    //   .getAsignaturaCurso(this.matricula.id_curso_m)
    //   .subscribe((res: any) => {
    //     this.asignaturas = res;
    //     // RECORREMOS TODAS LAS SIGNATURAS DE UN CURSO PARA INSERTAR LAS NOTAS
    //     for (let codigo_asignatura of this.asignaturas) {
    //       const nota: any = {
    //         id_asi: codigo_asignatura.id_asi,
    //         id_alu: this.alumno.id_alumno,
    //         id_periodo: id_periodo,
    //       };
    //       // INSERTAMOS EN LA TABLA NOTAS
    //       this.alumnoService.createNota(nota).subscribe((res: any) => {
    //         console.log(res);
    //       });
    //       console.log(
    //         `INSERT INTO notas(id_asi, id_alu, id_periodo) values (${codigo_asignatura.id_asi}, ${this.alumno.id_alumno}, ${id_periodo})`
    //       );
    //     }
    //     alert('Se ha registrado el alumno');
    //     document.location.reload();
    //   });
  }
}
