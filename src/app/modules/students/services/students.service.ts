import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  readonly URL = environment.api

  constructor(private http: HttpClient) { }

  notas(id: any){
    return this.http.get(`${this.URL}/alumno/notas/${id}`)
  }

   getStudent(id:string){
     return this.http.get(`${this.URL}/alumno/onAlumno/${id}`);
   }

   getServiciosAlumno(id:any){
     return this.http.get(`${this.URL}/alumno_servicio/${id}`)
   }

   getStudentWhitGrado(id:any){
    return this.http.get(`${this.URL}/alumno/onAlumno/grado/${id}`)
  }

  guardarSolicitud(mensaje:any){
    return this.http.post(`${this.URL}/solicitudes/add`,mensaje)
  }

  alumnoOutService(id:any){
    return this.http.get(`${this.URL}/alumno_servicio/servicios/${id}`)
  }

  getBecaAlumno(id:any){
    return this.http.get(`${this.URL}/beca/alumno/alumno_beca/${id}`)
  }
}
