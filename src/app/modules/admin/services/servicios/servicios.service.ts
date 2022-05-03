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
    return this.http.get(`${this.URL}/admin/servicios`)
  }

  //obtener un servicio
  getOneServices(cod_ser: any) {
    return this.http.get(`${this.URL}/admin/servicios/${cod_ser}`)
  }

  // le asigna el servicio al alumno
  createAlumno_servicio(alu_ser: any) {
    return this.http.post(`${this.URL}/admin/alumno_servicio/add/`, alu_ser)
  }

  // le elimina el servicio al alumno
  deleteAlumno_Servicio(id_alumno: number, cod_servicio: number) {
    return this.http.delete(`${this.URL}/admin/alu_ser/delete/${id_alumno}/${cod_servicio}`)
  }

  // obtiene los alumnos con servicios
  getAlumno_Servicio() {
    return this.http.get(`${this.URL}/admin/alumno_servicio`)
  }

  //  obtiene un solo alumno servicio
  getOne(id_alumno: any, cod_servicio: any) {
    return this.http.get(`${this.URL}/admin/alumno_servicio/${id_alumno}/${cod_servicio}`)
  }

  // actualiza el servicio
  updateService(cod_ser: any, service: any) {
    return this.http.put(`${this.URL}/admin/servicios/update/${cod_ser}`, service)
  }

}
