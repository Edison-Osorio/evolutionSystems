import { User } from './../../../../core/models/User';
import { Docente } from '@core/models/Docente';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class AdminService {
  URL = 'http://localhost:3000/api/admin'
  URL_U = 'http://localhost:3000/api/auth'
  constructor(private http: HttpClient) { }
  getDocente() {
    return this.http.get(`${this.URL}/docente/`)
  }
  getOneDocente(nif_doc: number | string ) {
    return this.http.get(`${this.URL}/docente/${nif_doc}`);
  }

  deleteDocente(nif_doc: number) {
    return this.http.delete(`${this.URL}/docente/delete/${nif_doc}`)
  }

  updateDocente(nif_doc: number) {
    return this.http.put(`${this.URL}/docente/update/${nif_doc}`, this.updateDocente)
  }

  createDocente(docente:Docente ){
    return this.http.post(`${this.URL}/docente/add`,docente)
  }
  createUser(user:User){
  return this.http.post(`${this.URL_U}/signup`,user)
  }

}

