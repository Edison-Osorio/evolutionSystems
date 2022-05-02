import { CursoService } from '@modules/admin/services/curso.service';
import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '@core/models/Alumno';
import { User } from '@core/models/User';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrls: ['./update-alumno.component.css'],
})
export class UpdateAlumnoComponent implements OnInit {
  // cursos: any = [];
  // grupos: any = [];

  user: User = {
    tipoDocumento: '1',
    // documento: '',
    // nombre: '',
    // contrasena: '',
    email: '',
    // rol: 'estudiante',
  };

  alumno: Alumno = {
    // id_alumno: '',
    nombre_alumno: '',
    direccion_alumno: '',
    telefono_alumno: '',
    fecha_nacimiento: Date,
    nombre_papa: '',
    nombre_mama: '',
    dato_banco_alumno: '',
  };

  constructor(
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private dateFormat: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.codigoEmitido();
    // this.getCursos();
    // this.getGrupos();
  }

  codigoEmitido() {
    this.alumnoService.codioAlumno.subscribe((codigo: any) => {
      const codigos = codigo.codigo;
      this.getOneAlumno(codigos);
    });
  }

  // getCursos() {
  //   this.cursoService.listCurso().subscribe((res: any) => {
  //     this.cursos = res;
  //   });
  // }

  // getGrupos() {
  //   this.cursoService.getGrupo().subscribe((res: any) => {
  //     this.grupos = res;
  //   });
  // }
  getOneAlumno(codigo: any) {
    this.alumnoService.getOneAlumno(codigo).subscribe((res: any) => {
      this.alumno = res;
      this.alumno.fecha_nacimiento = this.dateFormat.transform(
        this.alumno.fecha_nacimiento,
        'yyy-MM-dd'
      );

      console.log('ESte es el alumno --> ', this.alumno);
    });

    //  ruta de la tabla Usuario
    this.alumnoService.getOneUsuario(codigo).subscribe((res: any) => {
      const { email, tipoDocumento } = res;
      this.user.tipoDocumento = tipoDocumento;
      this.user.email = email;
    });
  }

  updateAlumno(id_alu: any) {
    delete this.alumno.id_alumno;
    if (
      confirm(
        `¿Está seguro de Actualizar el Usuario con el documento = ${id_alu}`
      )
    ) {
      this.alumnoService.updateAlumno(id_alu, this.alumno).subscribe(
        (res: any) => {
          const message = res.msg;
          this.alumnoService.updateUser(id_alu, this.user).subscribe(
            (res: any) => {
              alert(message);
              document.location.reload();
            },
            (err) => alert('Ocurrio un erro no se pudo actualizar el usuario')
          );
        },
        (err) => alert('Ocurrio un erro no se pudo actualizar el usuario')
      );
    }
  }
}
