import { Alumno } from '@core/models/Alumno';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '@core/models/User';
// import { CursoService } from '@modules/admin/services/curso.service';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { Router } from '@angular/router';
import { GradoService } from '@modules/admin/services/grado/grado.service';
import { NotaService } from '@shared/services/nota/nota.service';
import { AsignaturaService } from '@modules/admin/services/asignatura/asignatura.service';

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
    private asignaturaService: AsignaturaService,
    private alumnoService: AlumnoService,
    private gradoService: GradoService,
    private notaService: NotaService
  ) {}

  ngOnInit(): void {
    this.getGrados();
    this.listPeriodo();
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

  // Listamos todos los periodos
  listPeriodo() {
    this.notaService.listPeriodo().subscribe((res: any) => {
      this.periodos = res;
      // console.log('Esta es la respuesta del servidor de los periodos --> ',res);
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
                // OBTENEMOS LAS ASIGNATURAS QUE PERTENECEN A ESTE EL GRADO INGRESADO
                this.asignaturaService
                  .listAsignaturaGrado(this.matricula.id_grado_m)
                  .subscribe((res: any) => {
                    this.asignaturas = res;

                    // RECORREMOS TODAS LAS SIGNATURAS DE UN CURSO PARA INSERTAR LAS NOTAS
                    for (
                      let i: any = id_periodo;
                      i <= this.periodos.length;
                      i++
                    ) {
                      // console.log(
                      //   'Este es el identificador del periodo --> ',
                      //   i
                      // );

                      for (let codigo_asignatura of this.asignaturas) {
                        const nota: any = {
                          id_asignatura_n: codigo_asignatura.id_asignatura,
                          id_alumno_n: this.alumno.id_alumno,
                          id_grupo_n: this.matricula.id_grupo_m ,
                          id_periodo_n: i,
                        };
                        // INSERTAMOS EN LA TABLA NOTAS
                        this.notaService
                          .createNota(nota)
                          .subscribe((res: any) => {
                            console.log(res);
                          });
                        // console.log(
                        //   `INSERT INTO notas(id_asi, id_alu, id_periodo) values (${nota.id_asignatura_n}, ${nota.id_alumno_n}, ${nota.id_periodo_n})`
                        // );
                      }
                    }
                  });

                alert(res.msg);
                let ref = document.getElementById('cancel');
                ref?.click();
                document.location.reload()
              },
              (err) =>
                alert(
                  'No se pudo crear el alumno, revise que no se este repitiendo el identificador matricula'
                )
            );
          },
          (err) =>
            alert(
              'No se pudo crear el alumno, revise que no se este repitiendo el identificador alumno'
            )
        );
      },
      (err: any) =>
        alert(
          'No se pudo crear el alumno, revise que no se este repitiendo el identificador del usuario'
        )
    );
  }
}
