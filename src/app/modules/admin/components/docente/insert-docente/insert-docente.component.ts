import { Component, OnInit } from '@angular/core';
import { Docente } from '@core/models/Docente';
import { User } from '@core/models/User';
import { DocenteService } from '@modules/admin/services/docente/docente.service';

@Component({
  selector: 'app-insert-docente',
  templateUrl: './insert-docente.component.html',
  styleUrls: ['./insert-docente.component.css'],
})
export class InsertDocenteComponent implements OnInit {
  categorias: any = [];

  docente: Docente = {
    nif_docente: '',
    nombre_docente: '',
    direccion_docente: '',
    fecha_nacimiento_docente: Date,
    telefono_docente: '',
    dato_banco_docente: '',
    titulo: '',
    id_categoria_d: '',
  };
  user: User = {
    tipoDocumento: '1',
    documento: '',
    nombre: '',
    contrasena: '',
    email: '',
    rol: 'docente',
  };

  constructor(private docenteService: DocenteService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.docenteService.getCategorias().subscribe((res: any) => {
      this.categorias = res;

    });
  }

  createDocente() {
    this.docenteService.createUser(this.user).subscribe(
      (res) => {
       this.docenteService.createDocente(this.docente).subscribe(
      (res:any) => {
        alert(res.msg);
        document.location.reload();
      },
      (err:any)=>alert('No se pudo hacer la insercion del docente, verifique que el dentificador no este repetido')
    );
      },
      (err:any)=>alert('No se pudo hacer la insercion del docente, verifique que el dentificador no este repetido')
    );
  }
}
