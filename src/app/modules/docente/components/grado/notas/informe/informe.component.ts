import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { NotaService } from '@shared/services/nota/nota.service';
import { DocenteService } from '@modules/docente/services/docente.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode'

@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css'],
})
export class InformeComponent implements OnInit {
  periodos: any = [];
  asignaturas: any;
  grados: any = []

  Grado:any 
  Grupo:any

  notasAll: any = [];
  notasAsignatura: any = [];
  notas: any;

  userName:any

  date:any

  constructor(
    private notaService: NotaService,
    private docenteService: DocenteService,
    private cookie:CookieService
  ) {}

  ngOnInit(): void {
    this.listPeridos();
    this.listNotas();
    this.listAsignaturas();

    this.date = new Date()
  }
 
decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);
    this.userName= decodetoken.nombre
    return  decodetoken.nombre;
  }


  listPeridos() {
    this.notaService.listPeriodo().subscribe((res: any) => {
      this.periodos = res;
    });

  }

  listNotas() {
    this.notaService.notasEmitidas.subscribe((res: any) => {
      this.userName = this.decodeToken()
      this.notasAll = res;
      this.Grado = res[0].nombre_grado
      this.Grupo = res[0].nombre_grupo
      
    });
  }

  listAsignaturas() {
    this.notaService.asignaturasEmitidas.subscribe((res: any) => {
      this.asignaturas = res;    
    });
  }

  onSelectPeriodo(periodo: any) {
    const { value } = periodo;
    this.notasAsignatura = this.notasAll.filter(
      (item: any) => item.id_periodo_n == value
    );
  }

  onSelectAsignatura(asignatura: any) {
    const { value } = asignatura;
    this.notas = this.notasAsignatura.filter(
      (item: any) => item.id_asignatura_n == value
    );
  }
  public downloadPDF() {
    // Extraemos el
    const DATA: any = document.getElementById('htmldata');
    const doc = new jsPDF('p', 'pt', 'a4');
    const options = {
      background: 'white',
      scale: 2,
    };
    html2canvas(DATA, options)
      .then((canvas) => {
        const img = canvas.toDataURL('image/PNG');

        //Add image Canvas to PDF
        const bufferX = 30;
        const bufferY = 25;
        const imgProps = (doc as any).getImageProperties(img);
        const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        doc.addImage(
          img,
          'PNG',
          bufferX,
          bufferY,
          pdfWidth,
          pdfHeight,
          undefined,
          'FAST'
        );
        return doc;
      })
      .then((docResult) => {
        docResult.save(`InformeFinal.pdf`);
      });
  }
}
