import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Alumno } from '@core/models/Alumno';
import { User } from '@core/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  readonly URL = environment.api

  constructor(private http:HttpClient) { }

  getAlumnos(){
    return this.http.get(`${this.URL}/admin/estudiante`)
  }

  createAlumno(alumno:Alumno){
    return this.http.post(`${this.URL}/admin/estudiante/add`, alumno )
  }

  createUser(user: User) {
    return this.http.post(`${this.URL}/auth/signup`, user)
  }

}
