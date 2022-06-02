import { Component, OnInit } from '@angular/core';
import { AsignaturaService } from '@modules/admin/services/asignatura/asignatura.service';
import { ActivatedRoute } from '@angular/router';
import { HorarioService } from '@modules/admin/services/horario/horario.service';

@Component({
  selector: 'app-horario-asignado',
  templateUrl: './horario-asignado.component.html',
  styleUrls: ['./horario-asignado.component.css'],
})
export class HorarioAsignadoComponent implements OnInit {
  identificador: any;
  showHorario!: boolean
  horarios: any = [];
  asignaturas: any = [];
  horarioGradoGrupo: any = [];
  horariosGrado: any = [];
  selectedAsignatura: any = '';
  selectedDia:any = ''
  horario: any = {
    id_asignatura_ah: '',
    id_horario_ah: '',
    id_grupo_h: '',
  };

  constructor(
    private asignaturaService: AsignaturaService,
    private horarioService: HorarioService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.listAsignaturas();
    this.listHorario();
    this.listHorarioGradoGrupo();
  }

  refresh() {
    this.horario.id_asignatura_ah = '';
    this.horario.id_horario_ah = '';
  }
  // listamos todas las asignaturas
  listAsignaturas() {
    const { id_grado } = this.activatedRoute.snapshot.params;
    this.asignaturaService
      .listAsignaturaGrado(id_grado)
      .subscribe((res: any) => {
        this.asignaturas = res;
      });
  }
  // Listamos todos los horarios
  listHorario() {
    this.horarioService.listHorario().subscribe((res) => {
      this.horarios = res;
    });
  }

  // Listamos las asignaturas con horarios asigandos
  listHorarioGradoGrupo() {
    const { id_grado, id_grupo } = this.activatedRoute.snapshot.params;
    this.identificador = id_grado;
    this.horarioService
      .listHorarioGradoGrupo(id_grado, id_grupo)
      .subscribe((res: any) => {
        if (res.length == []) {
          this.showHorario = false
        }else{
          this.showHorario = true
        this.horariosGrado = res;
        this.horarioGradoGrupo = res;
        
      }
      });
  }

  onSelectAsignatura(id: any) {
    const { value } = id;
    if (this.selectedAsignatura === '') {
      this.horarioGradoGrupo = this.horariosGrado;
    } else {
      this.selectedDia = ''
      this.horarioGradoGrupo = this.horariosGrado.filter(
        (item: any) => item.id_asignatura == value
      );
    }
  }

  onSelectDia(id:any){
    const {value} = id
    if (this.selectedDia === '') {
      this.selectedAsignatura = ''
      this.horarioGradoGrupo = this.horariosGrado
    } else {
      
      this.horarioGradoGrupo = this.horariosGrado.filter((item:any)=> item.dia == value)
      console.log(this.horarioGradoGrupo);
      
    }
  }


  // Asignamos un horario a una asignatura
  createHorarioAsignatura() {
    const { id_grupo } = this.activatedRoute.snapshot.params;
    this.horario.id_grupo_h = id_grupo;
    this.horarioService.createHorarioAsignatura(this.horario).subscribe(
      (res: any) => {
        alert(res.msg);
        this.refresh();
        this.listHorarioGradoGrupo();
        this.selectedAsignatura = ''
        this.selectedDia = ''
      },
      (err) =>
        alert(
          'Ocurrio un error al asignar el horario a la asignatura ó ya la asignatura tiene el horario asignado'
        )
    );
  }
  // Eliminamos un horario de una asignatura
  deleteHorarioAsignatura(id_asignatura: any, id_horario: any) {
    if (confirm('¿Está seguro de eliminar este horario?')) {
      this.horarioService
        .deleteHorarioAsignatura(id_horario, id_asignatura)
        .subscribe(
          (res: any) => {
            alert(res.msg);
            this.listHorarioGradoGrupo();
            this.selectedAsignatura = ''
          },
          (err) => alert('Ocurrio un error y no se pudo elimimar este horario')
        );
    }
  }
}
