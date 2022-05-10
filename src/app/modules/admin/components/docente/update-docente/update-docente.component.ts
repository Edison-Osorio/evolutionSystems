import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Docente } from '@core/models/Docente';
import { User } from '@core/models/User';
import { DocenteService } from '@modules/admin/services/docente/docente.service';

@Component({
  selector: 'app-update-docente',
  templateUrl: './update-docente.component.html',
  styleUrls: ['./update-docente.component.css'],
})
export class UpdateDocenteComponent implements OnInit {
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
    // documento: '',
     nombre: '',
    // contrasena: '',
    email: '',
    // rol: 'estudiante',
  };

  constructor(
    private docenteService: DocenteService,
    private dateFormat: DatePipe
  ) {}

  ngOnInit(): void {
    this.codigoEmitido();
    this.getCategorias();
  }

  codigoEmitido() {
    this.docenteService.codigoDocente.subscribe((codigo: any) => {
      const codigos = codigo.codigo;
      this.getOnDocente(codigos);
    });
  }

  // Obtenemos un unico alumno
  getOnDocente(codigo: any) {
    this.docenteService.getOneDocente(codigo).subscribe((res: any) => {
      this.docente = res;
      this.docente.fecha_nacimiento_docente = this.dateFormat.transform(
        this.docente.fecha_nacimiento_docente,
        'yyy-MM-dd'
      );
    });

    this.docenteService.getOneUsuario(codigo).subscribe((res: any) => {
      const { email, tipoDocumento } = res;
      this.user.tipoDocumento = tipoDocumento;
      this.user.email = email;
    });
  }

  // Obtenermos las categorias que se le pueden asignar a el docente
  getCategorias() {
    this.docenteService.getCategorias().subscribe((res: any) => {
      this.categorias = res;
    });
  }

  // Actualización de usuario del docente en la tabla docente y usuario
  updateDocente(nif_doc: any) {
    delete this.docente.nif_docente;
    if (
      confirm(
        `¿Está seguro de Actualizar el Usuario con el documento = ${nif_doc} `
      )
    ) {
      this.docenteService
        .updateDocente(nif_doc, this.docente)
        .subscribe((res) => {});
      this.docenteService.updateUser(nif_doc, this.user).subscribe((res) => {
        alert('Usuario Actualizado');
        document.location.reload();
      });
    }
  }
}
