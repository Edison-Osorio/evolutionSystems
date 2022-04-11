import { Grado } from './../../../../core/models/Grado';
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
    return this.http.get(`${this.URL}admin/docente/`)
  }
  getOneDocente(nif_doc: number | string) {
    return this.http.get(`${this.URL}admin/docente/${nif_doc}`);
  }

  deleteDocente(nif_doc: number) {
    return this.http.delete(`${this.URL}admin/docente/delete/${nif_doc}`)
  }

  updateDocente(nif_doc: number | string, docentes: Docente): Observable<Docente> {
    return this.http.put(`${this.URL}admin/docente/update/${nif_doc}`, docentes)
  }

  createDocente(docente: Docente) {
    return this.http.post(`${this.URL}admin/docente/add`, docente)
  }

  createUser(user: User) {
    return this.http.post(`${this.URL}auth/signup`, user)
  }

  getGrados() {
    return this.http.get(`${this.URL}admin/grado`)
  }

  getEstudiantes(cod_gra: number | string) {
    return this.http.get(`${this.URL}admin/estudiante/${cod_gra}`)
  }

  deleteAlumno(id_alu: number | string) {
    return this.http.delete(`${this.URL}admin/estudiante/delete/${id_alu}`)
  }

  notasAlumnos(cod_gra: number | string) {
    return this.http.get(`${this.URL}admin/nota/${cod_gra}`)
  }

  createGrado(grado: Grado) {
    return this.http.post(`${this.URL}admin/grado/add`, grado)
  }

  deleteGrado(cod_gra: number | string) {
    return this.http.delete(`${this.URL}admin/grado/delete/${cod_gra}`)
  }

  getGrado(cod_gra: number | string) {
    return this.http.get(`${this.URL}admin/grado/${cod_gra}`)
  }

  updategrado(cod_gra: number | string, grado: Grado): Observable<Docente> {
    return this.http.put(`${this.URL}admin/grado/update/${cod_gra}`, grado)
  }
}

