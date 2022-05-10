import { Component, OnInit } from '@angular/core';
import { StudentsService } from '@modules/students/services/students.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { NotaService } from '@shared/services/nota/nota.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css'],
})
export class NotasComponent implements OnInit {

  showNotas!:boolean
  informacion: any = [];
  notas: any = [];
  periodo: any = '';
  periodos: any = [];
  notasPeriodo: any = [];
  constructor(
    private studentsService: StudentsService,
    private notaService: NotaService,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    this.alumnoToken();
    this.getNotas();
    this.listPeriodo();
  }
  alumnoToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    return decodetoken.documento;
  }

  getNotas() {
    this.notaService.listNotasAlumno(this.alumnoToken()).subscribe((res) => {
      this.notas = res;
    });
  }

  listPeriodo() {
    this.notaService.listPeriodo().subscribe((res: any) => {
      this.periodos = res;
    });
  }

  onSelectPeriodo(id_periodo: any) {
    if (this.periodo == '') {
     this.showNotas = false;
    } else {
      this.showNotas = true
      const { value } = id_periodo;
      this.notasPeriodo = this.notas.filter(
        (item: any) => item.id_periodo_n == value
        );
    }
  }
}
