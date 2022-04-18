import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '@modules/admin/services/alumno.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css'],
})
export class AlumnoComponent implements OnInit {
  alumnos: any = [];

  constructor(private alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.getAlumnos().subscribe((res: any) => {
      this.alumnos = res;
    });
  }
  codigoAlumno(codigo: number) {
    this.alumnoService.codioAlumno.emit({ codigo });
  }

  deleteAlumno(id_alu: number | string) {
    if (confirm('¿Esta seguro de eliminar el Alumno')) {
      this.alumnoService.deleteAlumno(id_alu).subscribe((res) => {});
      this.alumnoService.deleteUser(id_alu).subscribe((res) => {
        alert('Alumno eliminado');
        document.location.reload();
      });
    }
  }
}
