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

  @Output() codioAlumno: EventEmitter<any> = new EventEmitter()
  // @Output() OnAlumnos:EventEmitter<number> = new EventEmitter()

  constructor(private http:HttpClient) { }

  getAlumnos(){
    return this.http.get(`${this.URL}/alumno`)
  }
  getOneAlumno(id_alumno:any){
    return this.http.get(`${this.URL}/alumno/onAlumno/${id_alumno}`)
  }
// Obtenemos un usuario de la tabla Usuario
  getOneUsuario(id_alu:any){
  return this.http.get(`${this.URL}/auth/list/${id_alu}`)
  }
// Listamos los alumnos segun el identificador del grado y del grupo
listAlumnoGradoGrupo(id_grado: any, id_grupo: any){
return this.http.get(`${this.URL}/alumno/alumnos-grado-grupo/${id_grado}/${id_grupo}`)
}
// Creamos un alumno
  createAlumno(alumno:Alumno){
    return this.http.post(`${this.URL}/alumno/add-alumno`, alumno )
  }

  // Creamos la matricula del alumno
  createMatricula(matricula:any){
    return this.http.post(`${this.URL}/alumno/add-matricula`, matricula)
  }

  createUser(user: User) {
    return this.http.post(`${this.URL}/auth/signup`, user)
  }
// Actualizamos un alumno
  updateAlumno(id_alu: number | string, alumno:Alumno){
    return this.http.put(`${this.URL}/alumno/update-alumno/${id_alu}`, alumno)
  }
  // Se actualiza la informacion del alumno en la tabla de usuario
  updateUser(id:number | string, user:User){
    return this.http.put(`${this.URL}/auth/update/${id}`, user)
  }
// Eliminamos un alumno
  deleteAlumno(id_alu :any){
    return this.http.delete(`${this.URL}/estudiante/delete/${id_alu}`)
  }
  // ELIMINAMOS LA MATRICULA DEL ALUMNO
  deleteMatricula(matricula:any){
    return this.http.delete(`${this.URL}/estudiante/deleteMatricula/${matricula.id_alu}/${matricula.id_curso}`)
  }
// Eliminamos el alumno de la lista de
  deleteUser(id_alu:any){
    return this.http.delete(`${this.URL}/auth/delete/${id_alu}`)
  }

  // INSERTAMOS LO ALUMNOS EN LA TABLA DE CURSO
  createNota(nota : any){
      return this.http.post(`${this.URL}/admin/nota/add`, nota)
  }

  // OBTENEMOS LOS PERIODOS DE CADA UNA DE LAS TABLAS

  getTrimestres() {
    return this.http.get(`${this.URL}/admin/nota/trimestres/`);

  }

}
