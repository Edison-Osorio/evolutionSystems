import { Component, OnInit } from '@angular/core';
import { NotaService } from '@shared/services/nota/nota.service';
import { CookieService } from 'ngx-cookie-service';
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'

@Component({
  selector: 'app-informe-admin',
  templateUrl: './informe-admin.component.html',
  styleUrls: ['./informe-admin.component.css']
})
export class InformeAdminComponent implements OnInit {

  periodos: any = [];
  asignaturas: any;
  grados: any = []

  Grado:any 
  Grupo:any

  notasAll: any = [];
  notasPeriodo: any = [];
  notas: any;

  userName:any

  date:any

  constructor(
    private notaService: NotaService,
    private cookie:CookieService
  ) {}

  ngOnInit(): void {
    this.listPeriodo();
    this.listAsignaturas();
    
    this.date = new Date()
    this.codigoEmitido()
  }
  
  codigoEmitido(){
    this.notaService.CodigoEmitido.subscribe((res:any)=>{
       this.getNotas(res.codigo);
  })
}

  getNotas(id_alumno :any) {
    this.notaService.listNotasAlumno(id_alumno).subscribe((res:any) => {
      this.notas = res;
      this.notasAll = res;
      this.userName = res[0].nombre_alumno
      this.Grado = res[0].nombre_grado
      this.Grupo = res[0].nombre_grupo
    });
  }

  listPeriodo() {
    this.notaService.listPeriodo().subscribe((res: any) => {
      this.periodos = res;
    });
  }

  listNotas() {
    this.notaService.notasEmitidas.subscribe((res: any) => {
      
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
    this.notasPeriodo = this.notasAll.filter(
      (item: any) => item.id_periodo_n == value
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
        docResult.save(`InformaFinal ${this.userName}.pdf`);
      });
  }

}
