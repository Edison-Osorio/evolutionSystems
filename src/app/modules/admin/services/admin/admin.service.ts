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
  
  // <-- ADMINISTRADORES --> \\

  // obtener administradores
  getAdministradores() {
    return this.http.get(`${this.URL}/administrador`)
  }
//Creamos un alumno
  createUser(user: User) {
    return this.http.post(`${this.URL}/auth/signup`, user)
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

