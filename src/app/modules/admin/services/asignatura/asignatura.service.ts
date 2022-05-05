import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AsignaturaService {
  readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  // Listamos las asignaturas segun el identificador del curso
  listAsignaturaGrado(id_grado: any) {
    return this.http.get(`${this.URL}/asignatura/asignatura-grado/${id_grado}`);
  }

  // Listamos las asignaturas con su docente según el identificador del grado
  listAsignaturaDocente(id_grado: any) {
    return this.http.get(
      `${this.URL}/asignatura/asignatura-docente/${id_grado}`
    );
  }

  // Creamos una asignatura
  createAsignatura(asignatura: any) {
    return this.http.post(`${this.URL}/asignatura/add-asignatura`, asignatura);
  }

  //Asignamos un docente a una asignatura
  createAsignaturaDocente(asignatura_docente: any) {
    return this.http.post(
      `${this.URL}/asignatura/add-asignatura-docente`,
      asignatura_docente
    );
  }

  // Eliminamos una asignatura
  deleteAsignatura(id_asignatura: any) {
    return this.http.delete(`${this.URL}/asignatura/delete/${id_asignatura}`);
  }

  // Eliminamos la asignacion de la asignatura al docente
  deleteAsignaturaDocente(id_asignatura: any, id_docente: any) {
    return this.http.delete(
      `${this.URL}/asignatura/delete-asignatura-docente/${id_asignatura}/${id_docente}`
    );
  }
}
