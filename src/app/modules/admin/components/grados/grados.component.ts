import { Component, OnInit } from '@angular/core';
import { GradoService } from '@modules/admin/services/grado/grado.service';

@Component({
  selector: 'app-grados',
  templateUrl: './grados.component.html',
  styleUrls: ['./grados.component.css'],
})
export class GradosComponent implements OnInit {
  constructor(private gradoService:GradoService) {}
  grados: any = [];

  notas: any = [];
  estudiantes: any = [];
  ngOnInit(): void {
    this.listGrados();
  }

  cursoEmitidos(curso: any) {
    this.gradoService.gradosEmitidos.emit(curso);
  }

  listGrados() {
    this.gradoService.listGrados().subscribe((res: any) => {
      this.grados = res;
    });
  }

  // Elimina el grado
  deleteGrado(id_grado: number | string) {
    if (confirm('¿Está seguro de eliminar este grado?')) {
      this.gradoService.deleteGrado(id_grado).subscribe(
        (res: any) => {
          alert(res.msg);
          // document.location.reload();
          this.listGrados()
        },
        (err) => {
          alert('No se puede eliminar este grupo');
        }
      );
    }
  }
}
