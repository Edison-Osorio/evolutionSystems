import { Component, OnInit } from '@angular/core';
import { CursoService } from '@modules/admin/services/curso.service';

@Component({
  selector: 'app-asignatura',
  templateUrl: './asignatura.component.html',
  styleUrls: ['./asignatura.component.css'],
})
export class AsignaturaComponent implements OnInit {
  showAdd!: boolean;
  showUpdate!: boolean;
  asignaturas: any = [];

  asignatura: any = {
    id_asi: '',
    nom_asi: '',
    desc_asi: '',
  };

  constructor(private cursoService: CursoService) {}

  ngOnInit(): void {
    // this.listAsignatura();
  }

  listAsignatura() {
    this.cursoService.getListAsignaturas().subscribe((res: any) => {
      this.asignaturas = res;
    });
  }

  clickAddAsignaturas() {
    this.showAdd = true;
    this.showUpdate = false;
  }

  onEdit(asig: any) {
    this.showAdd = false;
    this.showUpdate = true;

    this.asignatura = asig;
  }

  createAsignatura() {
    this.cursoService.createAsignatura(this.asignatura).subscribe(
      (res: any) => {
        alert('Asignatura creada en la base de datos');
        this.listAsignatura();
        const ref = document.getElementById('cancel');
        ref?.click();
      },
      (err) => {
        alert(
          'No se pudo crear la asignatura, revisa la cantidad de caracteres ingresados o que el indentificador no este repetido'
        );
      }
    );
  }

  updateAsignatura() {
    const id = this.asignatura.id_asi;
    delete this.asignatura.id_asi;

    this.cursoService.updateAsignatura(id, this.asignatura).subscribe(
      (res: any) => {
        alert('Asignatura actualizada');
        const ref = document.getElementById('cancel');
        ref?.click();
        this.listAsignatura();
      },
      (err) => alert('NO se pudo actualizar la asignatura')
    );
  }

  deleteAsignatura(id_asi: number) {
    {
      this.cursoService.deleteAsignatura(id_asi).subscribe(
        (res: any) => {
          alert('Asignatura eliminada');
          this.listAsignatura();
        },
        (err) => alert('No se pudo eliminar la Asignatura')
      );
    }
  }
}
