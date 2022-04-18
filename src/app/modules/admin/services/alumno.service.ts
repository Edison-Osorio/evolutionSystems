import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Alumno } from '@core/models/Alumno';
import { User } from '@core/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {

  readonly URL = environment.api

  @Output() codioAlumno: EventEmitter<any>= new EventEmitter()
  // @Output() OnAlumnos:EventEmitter<number> = new EventEmitter()

  constructor(private http:HttpClient) { }

  getAlumnos(){
    return this.http.get(`${this.URL}/admin/estudiante`)
  }
  getOneAlumno(id_alu:any){
    return this.http.get(`${this.URL}/admin/estudiante/estudiante/${id_alu}`)
  }

  getOneUsuario(id_alu:any){
  return this.http.get(`${this.URL}/auth/list/${id_alu}`)
  }

  createAlumno(alumno:Alumno){
    return this.http.post(`${this.URL}/admin/estudiante/add`, alumno )
  }

  createUser(user: User) {
    return this.http.post(`${this.URL}/auth/signup`, user)
  }

  updateAlumno(id_alu: number | string, alumno:Alumno){
    return this.http.put(`${this.URL}/admin/estudiante/update/${id_alu}`, alumno)
  }
  updateUser(id:number | string, user:User){
    return this.http.put(`${this.URL}/auth/update/${id}`, user)
  }

  deleteAlumno(id_alu :any){
    return this.http.delete(`${this.URL}/admin/estudiante/delete/${id_alu}`)
  }
  deleteUser(id_alu:any){
    return this.http.delete(`${this.URL}/auth/delete/${id_alu}`)
  }

}
