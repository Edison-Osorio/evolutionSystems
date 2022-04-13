import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DocenteService } from '@modules/docente/services/docente.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent implements OnInit {
  hidden: boolean = false
  asignaturas: any = [];
  trimestres: any = [];
  notasAll: any = [];
  notasPeriodo: any = [];
  notas: any = [];
  selectedAsignatura: any = '';
  selectedPeriodo: any = '';

  notes: any = {};

  constructor(
    private docenteService: DocenteService,
    private activedRoute: ActivatedRoute,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.getAsignatura();
    this.getTrimestres();
    this.getNotas();
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
    this.docenteService
      .getAsignatura(this.decodeToken())
      .subscribe((res: any) => {
        this.asignaturas = res;
      });
  }

  getTrimestres() {
    this.docenteService.getTrimestres().subscribe((res: any) => {
      this.trimestres = res;
    });
  }
  getNotas() {
    const params = this.activedRoute.snapshot.params;
    if (params['cod_gra']) {
      this.docenteService.getNotas(params['cod_gra']).subscribe((res: any) => {
        this.notasAll = res;
      });
    }
  }

  onSelectPeriodo(id: any) {
    const { value } = id;

    this.selections();
    this.notasPeriodo = this.notasAll.filter(
      (item: any) => item.id_periodo == value
    );
    this.hidden = true
  }
  onSelectAsignatura(id: any) {
    const { value } = id;
    this.notas = this.notasPeriodo.filter((item: any) => item.id_asi == value);

    this.notes = this.notas;
    console.log('varibale notas', this.notes);
  }

  update() {
    if (confirm('Esta seguro de gradar la info?')) {
      console.log(this.notas);

      console.log('Se orpimio el boton de actualizar');
      console.log('Inicia el ciclo');
      var numbers: any = this.notas;
      console.log(numbers.length);
      for (var _i = 0; _i < numbers.length; _i++) {
        var num = numbers[_i];
        console.log(num);
      }

      var notes = this.notas;
      console.log(
        'Este es el array con el numero de dato dentro',
        this.notas.length
      );
      for (var nota = 0; nota < this.notas.length; nota++) {
        const { id_asi, id_alu, id_periodo } = this.notas[nota];
        console.log('-->', id_asi, '-->', id_alu, '-->', id_periodo);
        delete this.notas[nota].id_asi;
        delete this.notas[nota].id_alu;
        delete this.notas[nota].id_periodo;
        delete this.notas[nota].nom_alu;
        delete this.notas[nota].nom_asi;
        delete this.notas[nota].nota_final
        let notas = this.notas[nota];
        this.docenteService
          .updateNota(id_asi, id_alu, id_periodo, notas)
          .subscribe(
            (res: any) => {
              console.log(res); 
              document.location.reload();
            },
            (err) => console.log('Ocurrio un error ����', err)
          );
        console.log(notas);
      }
      console.log('Termina el ciclo');

      console.log('Se actualizaron estas notas', this.notas);
    }
  }
}
