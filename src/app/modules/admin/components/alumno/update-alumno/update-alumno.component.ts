import { CursoService } from '@modules/admin/services/curso.service';
import { Component, Input, OnInit } from '@angular/core';
import { Alumno } from '@core/models/Alumno';
import { User } from '@core/models/User';
import { AlumnoService } from '@modules/admin/services/alumno.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrls: ['./update-alumno.component.css'],
})
export class UpdateAlumnoComponent implements OnInit {
  cursos: any = [];
  grupos: any = [];

  user: User = {
    tipoDocumento: '1',
    // documento: '',
    // nombre: '',
    // contrasena: '',
    email: '',
    // rol: 'estudiante',
  };

  alumno: Alumno = {
    // id_alu: '',
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

  constructor(
    private alumnoService: AlumnoService,
    private cursoService: CursoService,
    private dateFormat: DatePipe,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.codigoEmitido();
    this.getCursos();
    this.getGrupos();
  }

  codigoEmitido() {
    this.alumnoService.codioAlumno.subscribe((codigo:any) => {
      const codigos = codigo.codigo;
      this.getOneAlumno(codigos);
    });
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
  getOneAlumno(codigo: any) {
    this.alumnoService.getOneAlumno(codigo).subscribe((res: any) => {
      this.alumno = res;
      this.alumno.fec_alu = this.dateFormat.transform(
        this.alumno.fec_alu,
        'yyy-MM-dd'
      );
    });

    //  ruta de la tabla Usuario
    this.alumnoService.getOneUsuario(codigo).subscribe((res: any) => {
      const { email, tipoDocumento } = res;
      this.user.tipoDocumento = tipoDocumento;
      this.user.email = email;
    });
  }

  update(id_alu: any) {
    delete this.alumno.id_alu;
    if (
      confirm(
        `¿Está seguro de Actualizar el Usuario con el documento = ${id_alu}`
      )
    ) {
      this.alumnoService
        .updateAlumno(id_alu, this.alumno)
        .subscribe((res:any ) => {});
      this.alumnoService.updateUser(id_alu, this.user).subscribe((res:any) => {
        alert('Usuario Actualizado');
        document.location.reload();
      });
    }
  }
}
