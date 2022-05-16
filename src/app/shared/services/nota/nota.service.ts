import { EventEmitter, Injectable, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotaService {

  readonly URL = environment.api
 @Output() notasEmitidas: EventEmitter<any> = new EventEmitter();
 @Output() asignaturasEmitidas:EventEmitter<any> = new EventEmitter()
 @Output() CodigoEmitido: EventEmitter<any> = new EventEmitter()
  constructor(private http: HttpClient) { }

  // listamos las notas
  listNotas(id_grado:any, id_grupo: any){
    return this.http.get(`${this.URL}/nota/list-notas/${id_grado}/${id_grupo}`)
  }

  //Listamos las notas de un alumno por su identificador
  listNotasAlumno(id_alumno: any){
    return this.http.get(`${this.URL}/nota/notas-alumno/${id_alumno}`)
  }

  // Listanos todos los periodos
  listPeriodo(){
    return this.http.get(`${this.URL}/nota/periodo`)
  }

  // Creamos una nota
  createNota(nota: any){
    return this.http.post(`${this.URL}/nota/add-nota`, nota)
  }

  // Actualizamos las notas de los alumnos
  updateNotas(id_alumno:any, id_asignatura: any, id_periodo: any, nota: any){
    return this.http.put(`${this.URL}/nota/update-nota/${id_alumno}/${id_asignatura}/${id_periodo}`, nota)
  }


  // Eliminamos las notas de un alumno
  deleteNota(id_alumno:any){
    return this.http.delete(`${this.URL}/nota/delete-nota/${id_alumno}`)
  }


}
