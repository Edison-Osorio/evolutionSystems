import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '@modules/admin/services/admin/admin.service';
import { DatePipe } from '@angular/common';
import { HorarioService } from '@modules/admin/services/horario/horario.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.css'],
})
export class HorarioComponent implements OnInit {
  constructor(
    private horarioService: HorarioService,
    private activedRoute: ActivatedRoute,
    private dateFormat: DatePipe
  ) {}
  horarios: any = [];
  Horario: any = {
    // id_horario: '',
    dia: '',
    hora: Date(),
  };
  ngOnInit(): void {
    this.listHorario();
  }

  //Listamos todos los horarios
  listHorario() {
    this.horarioService.listHorario().subscribe((res) => {
      this.horarios = res;
    });
  }

   getOneHorario(id_horario: any) {
     this.horarioService.listOnHorario(id_horario).subscribe(
       (res) => {
         this.Horario = res;
         console.log(this.Horario);
       },
       (err) => console.log(err)
     );
   }
  refresh() {
    // this.Horario.id_horario = '';
    this.Horario.dia = '';
    this.Horario.hora = '';
  }

  createHorario() {
    console.log('Esta es al información a insertar --> ', this.Horario);

    this.horarioService.createHorario(this.Horario).subscribe(
      (res: any) => {
        {
          alert(res.msg);
          const ref = document.getElementById('cancelar');
          ref?.click();
          this.listHorario();
        }
      },
      (err) => console.log('error ---->', err)
    );
  }

  deleteHorario(id_horario: any) {
    if (confirm('¿Está seguro de eliminar este horario?')) {
      this.horarioService.deleteHorario(id_horario).subscribe(
        (res: any) => {
          {
            alert(res.msg);
            this.listHorario();
          }
        },
        (err) => console.log('error', err)
      );
    }
  }

  updateHorario() {
    console.log('Esta es informacion a actualizar --> ',this.Horario.id_horario, this.Horario);
    
     this.horarioService
       .updateHorario(this.Horario.id_horario, this.Horario)
       .subscribe(
         (res: any) => {
          //  this.Horario = res;
           alert(res.msg)
           const ref = document.getElementById('cancel')
           ref?.click()
           this.listHorario()
         },
         (err) => console.log(err)
       );
  }
}
