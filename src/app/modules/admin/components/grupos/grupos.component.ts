// import { Grado } from '../../../../core/models/Curso';
import { ActivatedRoute } from '@angular/router';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AdminService } from '@modules/admin/services/admin/admin.service';
import { CursoService } from '@modules/admin/services/curso.service';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {
  // @Input()
  // codigo: number = 0;
  // curso: any
  // @Output() cursosEmitidos: EventEmitter<any> = new EventEmitter()
  // @Output() onShare: EventEmitter<number> = new EventEmitter();


  constructor(
    private adminService: AdminService,
    private activedRoute: ActivatedRoute,
    private cursoService: CursoService
  ) {}
  cursos: any = [];

  notas: any = [];
  estudiantes: any = [];
  ngOnInit(): void {
    this.listCurso();
  }

  cursoEmitidos(curso:any){
    this.cursoService.cursosEmitidos.emit(curso)
  }

  listCurso() {
    this.cursoService.listCurso().subscribe((res: any) => {
      this.cursos = res;
    });
  }

  // Elimina el grado
  deleteGrado(id_curso: number | string) {
    if (confirm('¿Está seguro de eliminar este grado?')) {
      this.cursoService.deleteCurso(id_curso).subscribe(
        (res: any) => {
          alert(res.message);
          document.location.reload();
        },
        (err) => {
          alert('No se puede eliminar este grupo');
        }
      );
    }
  }
}
