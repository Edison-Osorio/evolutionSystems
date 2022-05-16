import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from '@modules/docente/services/docente.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { NotaService } from '@shared/services/nota/nota.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent implements OnInit {
  hidden: boolean = false;
  identificador: any;
  asignaturas: any = [];
  trimestres: any = [];
  notasAll: any = [];
  notasPeriodo: any = [];
  notas: any = [];
  selectedAsignatura: any = '';
  selectedPeriodo: any = '';

  grados:any
  notes: any = {};
  
  Grado:any
  Grupo:any

  constructor(
    private docenteService: DocenteService,
    private notaService: NotaService,
    private activedRoute: ActivatedRoute,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.getAsignatura();
    this.listPeridos();
    this.getNotas();
    // this.listGradoGrupo()
    // this.prueba()
  }

  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    return decodetoken.documento;
  }

  selections() {
    if (this.selectedPeriodo === '') {
      this.selectedAsignatura = '';
      document.location.reload();
    }
  }

  getAsignatura() {
    const { id_grado } = this.activedRoute.snapshot.params;
    this.identificador = id_grado;
    this.docenteService
      .listAsignaturasDocenteGrado(this.decodeToken(), id_grado)
      .subscribe((res: any) => {
        this.asignaturas = res;

       this.asignaturasEmitidas()
      });
  }

  listPeridos() {
    this.notaService.listPeriodo().subscribe((res: any) => {
      this.trimestres = res;
    });
  }
  getNotas() {
    const params = this.activedRoute.snapshot.params;
     
    if ((params['id_grado'], params['id_grupo'])) {
      this.notaService
        .listNotas(params['id_grado'], params['id_grupo'])
        .subscribe((res: any) => {
          this.notasAll = res;
          this.Grado = res[0].nombre_grado
          this.Grupo = res[0].nombre_grupo
          this.notasAEmitir();
        });
    }
  }


  notasAEmitir() {
    this.notaService.notasEmitidas.emit(this.notasAll );
  }

  asignaturasEmitidas(){
    this.notaService.asignaturasEmitidas.emit(this.asignaturas)
  }

  onSelectPeriodo(id: any) {
    const { value } = id;
    this.selections();
    this.notasPeriodo = this.notasAll.filter(
      (item: any) => item.id_periodo_n == value
    );
    this.hidden = true;
  }
  onSelectAsignatura(id: any) {
    const { value } = id;
    this.notas = this.notasPeriodo.filter(
      (item: any) => item.id_asignatura_n == value
    );
    this.notes = this.notas;
  }

  update() {
    if (confirm('Esta seguro de guardar las modificaciones?')) {
      var numbers: any = this.notas;
      for (var _i = 0; _i < numbers.length; _i++) {
        var num = numbers[_i];
        console.log(num);
      }

      var notes = this.notas;
      for (var nota = 0; nota < this.notas.length; nota++) {
        const { id_asignatura_n, id_alumno_n, id_periodo_n } = this.notas[nota];
        delete this.notas[nota].id_asignatura_n;
        delete this.notas[nota].id_alumno_n;
        delete this.notas[nota].id_periodo_n;
        delete this.notas[nota].nombre_alumno;
        delete this.notas[nota].id_grupo_n;
        delete this.notas[nota].nombre_asignatura;
        delete this.notas[nota].nota_final;
        delete this.notas[nota].nombre_grado;
        delete this.notas[nota].nombre_grupo;
        let notas = this.notas[nota];
        this.notaService
          .updateNotas(id_alumno_n, id_asignatura_n, id_periodo_n, notas)
          .subscribe(
            (res: any) => {
              alert(res.text);
              this.getNotas();
              document.location.reload();
            },
            (err) => console.log('Ocurrio un error ����', err)
          );
      }
    }
  }
}
