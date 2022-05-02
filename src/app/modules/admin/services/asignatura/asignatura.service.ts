import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {

  readonly URL = environment.api

  constructor(private http:HttpClient) { }

  // Listamos las asignaturas segun el identificador de la asignatura
  listAsignaturaGrado(id_grado:any){
return this.http.get(`${this.URL}/asignatura/asignatura-grado/${id_grado}`)
  }

// Creamos una asignatura
createAsignatura(asignatura: any){
  return this.http.post(`${this.URL}/asignatura/add-asignatura`, asignatura)
}


}
