import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
// import { CursoService } from '@modules/admin/services/curso.service';
import { NotaService } from '@shared/services/nota/nota.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  alumnos: any = [];

  constructor(
    private alumnoService: AlumnoService,

  ) {}

  ngOnInit(): void {
    this.listAlumno()
  }
  // Listamos todos los alumnos
  listAlumno(){
    this.alumnoService.getAlumnos().subscribe((res: any) => {
      this.alumnos = res;
    });
  }
  codigoAlumno(codigo: number) {
    this.alumnoService.codioAlumno.emit({ codigo });
  }

  deleteAlumno(alumno: any) {
    // if (confirm('¿Esta seguro de eliminar el Alumno')) {
    //   this.cursoService.deleteNota(alumno).subscribe(
    //     (res: any) => {
    //       this.alumnoService.deleteMatricula(alumno).subscribe(
    //         (res: any) => {
    //           this.alumnoService.deleteAlumno(alumno.id_alu).subscribe(
    //             (res) => {
    //               this.alumnoService.deleteUser(alumno.id_alu).subscribe(
    //                 (res) => {
    //                   alert('Alumno eliminado');
    //                   document.location.reload();
    //                 },
    //                 (err) => {
    //                   alert('No se pudo eliminar el usuario');
    //                 }
    //               );
    //             },
    //             (err) => {
    //               alert('No se pudo eliminar el usuario');
    //             }
    //           );
    //         },
    //         (err) => {
    //           alert('No se pudo eliminar el usuario');
    //         }
    //       );
    //     },
    //     (err) => {
    //       alert('No se pudo eliminar el usuario');
    //     }
    //   );
    // }
  }
}
