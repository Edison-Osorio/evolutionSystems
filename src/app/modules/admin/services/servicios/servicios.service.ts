import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  URL = environment.api
  constructor(private http: HttpClient) { }

  //obtener servicios
  getServices() {
    return this.http.get(`${this.URL}/servicios`)
  }

  //obtener un servicio
  getOneServices(cod_ser: any) {
    return this.http.get(`${this.URL}/servicios/${cod_ser}`)
  }

  // le asigna el servicio al alumno
  createAlumno_servicio(alu_ser: any) {
    return this.http.post(`${this.URL}/alumno_servicio/add/`, alu_ser)
  }

  // le elimina el servicio al alumno
  deleteAlumno_Servicio(id_alumno: number, cod_servicio: number) {
    return this.http.delete(`${this.URL}/alumno_servicio/delete/${id_alumno}/${cod_servicio}`)
  }
    // le elimina el servicio al alumno segun el identificador del alumno
  deleteAlumno_ServicioAlumno(id_alumno: number) {
    return this.http.delete(`${this.URL}/alumno_servicio/delete-servicio-alumno/${id_alumno}`)
  }

  // obtiene los alumnos con servicios
  getAlumno_Servicio() {
    return this.http.get(`${this.URL}/alumno_servicio`)
  }

  //  obtiene un solo alumno servicio
  getOne(id_alumno: any, cod_servicio: any) {
    return this.http.get(`${this.URL}/alumno_servicio/${id_alumno}/${cod_servicio}`)
  }

  // actualiza el servicio
  updateService(cod_ser: any, service: any) {
    return this.http.put(`${this.URL}/servicios/update/${cod_ser}`, service)
  }

}
