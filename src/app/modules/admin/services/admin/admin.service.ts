import { Alumno } from '@core/models/Alumno';
// import { Grado } from '../../../../core/models/Curso';
import { Observable } from 'rxjs';
import { User } from './../../../../core/models/User';
import { Docente } from '@core/models/Docente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL = environment.api

  constructor(private http: HttpClient) { }
  getDocente() {
    return this.http.get(`${this.URL}/admin/docente/`)
  }
  getOneDocente(nif_doc: number | string) {
    return this.http.get(`${this.URL}/admin/docente/${nif_doc}`);
  }

  deleteDocente(nif_doc: number) {
    return this.http.delete(`${this.URL}/admin/docente/delete/${nif_doc}`)
  }

  updateDocente(nif_doc: number | string, docentes: Docente): Observable<Docente> {
    return this.http.put(`${this.URL}/admin/docente/update/${nif_doc}`, docentes)
  }

  createDocente(docente: Docente) {
    return this.http.post(`${this.URL}/admin/docente/add`, docente)
  }

  createAlumno(alumno: Alumno) {
    return this.http.post(`${this.URL}/admin/estudiante/add`, alumno)
  }
  createUser(user: User) {
    return this.http.post(`${this.URL}/auth/signup`, user)
  }

  getGrados() {
    return this.http.get(`${this.URL}/admin/grado`)
  }

  getEstudiantes(cod_gra: number | string) {
    return this.http.get(`${this.URL}/admin/estudiante/${cod_gra}`)
  }

  deleteAlumno(id_alu: number | string) {
    return this.http.delete(`${this.URL}/admin/estudiante/delete/${id_alu}`)
  }

  notasAlumnos(cod_gra: number | string) {
    return this.http.get(`${this.URL}/admin/nota/${cod_gra}`)
  }

  // createGrado(grado: Grado) {
  //   return this.http.post(`${this.URL}/admin/grado/add`, grado)
  // }

  deleteGrado(cod_gra: number | string) {
    return this.http.delete(`${this.URL}/admin/grado/delete/${cod_gra}`)
  }

  getGrado(cod_gra: number | string) {
    return this.http.get(`${this.URL}/admin/grado/${cod_gra}`)
  }

  // updategrado(cod_gra: number | string, grado: Grado): Observable<Docente> {
  //   return this.http.put(`${this.URL}/admin/grado/update/${cod_gra}`, grado)
  // }

  //servicios del horario
  //obtener todos
  getHorario() {
    return this.http.get(`${this.URL}/admin/horario`)
  }
  // crear
  crateHorario(horario: any) {
    return this.http.post(`${this.URL}/admin/horario/add`, horario)
  }
  //eliminar
  deleteHorario(cod_hor: any) {
    return this.http.delete(`${this.URL}/admin/horario/delete/${cod_hor}`)
  }
  //actualizar
  updateHorario(cod_hor: number | string, horario: any) {
    return this.http.put(`${this.URL}/admin/horario/update/${cod_hor}`, horario)
  }
  //obtener uno
  getOnoHorario(cod_hor: any) {
    return this.http.get(`${this.URL}/admin/horario/${cod_hor}`)
  }

  // <-- ADMINISTRADORES --> \\

  // obtener administradores
  getAdministradores() {
    return this.http.get(`${this.URL}/administrador`)
  }

  // elimina el administrador
  deleteAdministrador(documento: any) {
    return this.http.delete(`${this.URL}/administrador/delete/${documento}`)
  }

  //obtiene un sulo administrador
  getOneAdministrador(documento: any) {
    return this.http.get(`${this.URL}/administrador/${documento}`)
  }

  //actualiza el administrador
  updateAdministrador(documento: any, user: any) {
    return this.http.put(`${this.URL}/administrador/update/${documento}`, user)
  }


}

