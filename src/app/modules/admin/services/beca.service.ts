import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ht } from 'date-fns/locale';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BecaService {

  readonly URL=environment.api

  constructor(private http:HttpClient) { }
  // obtener becas
  getBecas(){
    return this.http.get(`${this.URL}/admin/beca`)
  }

  // listar alumnos con becas y el servicio que los cubre
  listBecasWhitService(){
    return this.http.get(`${this.URL}/admin/beca/alumno/alumno_beca`)
  }

  // crear becas
  createBeca(beca:any){
    return this.http.post(`${this.URL}/admin/beca/add`,beca)
  }
  createAlumno_beca(alumno_beca:any){
    return this.http.post(`${this.URL}/admin/beca/beca_alumno/add`,alumno_beca)
  }

  // eliminar beca
  deleteBeca(cod_beca:number){
    return this.http.delete(`${this.URL}/admin/beca/delete/${cod_beca}`)
  }

  // optener uno solo
  getOne(cod_beca:number){
    return this.http.get(`${this.URL}/admin/beca/${cod_beca}`)
  }

  // actualizar beca
  updateBeca(cod_beca:any,beca:any){
    return this.http.put(`${this.URL}/admin/beca/update/${cod_beca}`,beca)
  }

  deleteBecasWhitService(codigo_beca:any){
    return this.http.delete(`${this.URL}/admin/beca/beca_alumno/delete/${codigo_beca}`)
  }

}
