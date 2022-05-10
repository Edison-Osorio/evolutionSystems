import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno/alumno.service';
import { BecaService } from '@modules/admin/services/becas/beca.service';
import { ServiciosService } from '@modules/admin/services/servicios/servicios.service';
import { SolicitudesService } from '@modules/admin/services/solicitudes/solicitudes.service';
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
    private notaService: NotaService,
    private solicitudeService: SolicitudesService,
    private servicioServices: ServiciosService,
    private becaService: BecaService
  ) {}

  ngOnInit(): void {
    this.listAlumno();
  }
  // Listamos todos los alumnos
  listAlumno() {
    this.alumnoService.getAlumnos().subscribe((res: any) => {
      this.alumnos = res;
    });
  }
  codigoAlumno(codigo: number) {
    this.alumnoService.codioAlumno.emit({ codigo });
  }

  deleteAlumno(alumno: any) {
    if (confirm(`¿Esta seguro de eliminar el Alumno con el documento ${alumno}` )) {
      this.notaService.deleteNota(alumno).subscribe(
        (res: any) => {
          this.alumnoService.deleteMatricula(alumno).subscribe(
            (res: any) => {
              this.solicitudeService.eliminarSolicitudAlumno(alumno).subscribe(
                (res: any) => {
                  this.servicioServices
                    .deleteAlumno_ServicioAlumno(alumno)
                    .subscribe(
                      (res: any) => {
                        this.becaService
                          .deleteAlumnoBecaService(alumno)
                          .subscribe(
                            (res: any) => {
                              this.alumnoService.deleteAlumno(alumno).subscribe(
                                (res) => {
                                  this.alumnoService
                                    .deleteUser(alumno)
                                    .subscribe(
                                      (res:any) => {
                                        const message = res.msg;
                                        alert(message);
                                        this.listAlumno()
                                      },
                                      (err) => {
                                        alert('No se pudo eliminar el usuario');
                                      }
                                    );
                                },
                                (err) => {
                                  alert('No se pudo eliminar el usuario');
                                }
                              );
                            },
                            (err) => {
                              alert('No se pudo eliminar el usuario');
                            }
                          );
                      },
                      (err) => {
                        alert('No se pudo eliminar el usuario');
                      }
                    );
                },
                (err) => {
                  alert('No se pudo eliminar el usuario');
                }
              );
            },
            (err) => {
              alert('No se pudo eliminar el usuario');
            }
          );
        },
        (err) => {
          alert('No se pudo eliminar el usuario');
        }
      );
    }
  }
}
