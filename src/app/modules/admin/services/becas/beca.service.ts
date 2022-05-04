import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BecaService {

  readonly URL = environment.api

  constructor(private http: HttpClient) { }
  // obtener becas
  getBecas() {
    return this.http.get(`${this.URL}/beca`)
  }

  // obtener becas disponibles
  getBecasDisponibles() {
    return this.http.get(`${this.URL}/beca/becas-disponibles`)
  }

  // listar alumnos con becas y el servicio que los cubre
  listBecasWhitService() {
    return this.http.get(`${this.URL}/beca/alumno/alumno_beca`)
  }

  // crear becas
  createBeca(beca: any) {
    return this.http.post(`${this.URL}/beca/add`, beca)
  }
  createAlumno_beca(alumno_beca: any) {
    return this.http.post(`${this.URL}/beca/beca_alumno/add`, alumno_beca)
  }

  // eliminar beca
  deleteBeca(cod_beca: number) {
    return this.http.delete(`${this.URL}/beca/delete/${cod_beca}`)
  }

  // optener uno solo
  getOne(codigo_beca: any) {
    return this.http.get(`${this.URL}/beca/${codigo_beca}`)
  }

  // actualizar beca
  updateBeca(codigo_beca: any, beca: any) {
    return this.http.put(`${this.URL}/beca/update/${codigo_beca}`, beca)
  }

  // elimina las becas con los servicios que los cubre
  deleteBecasWhitService(codigo_beca: any, id_alumno: any) {
    return this.http.delete(`${this.URL}/beca/beca_alumno/delete/${codigo_beca}/${id_alumno}`)
  }

}
