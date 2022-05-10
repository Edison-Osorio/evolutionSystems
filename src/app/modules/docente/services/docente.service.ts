import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  readonly URL = environment.api;

  @Output() codigoGradoEmitido: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) {}
  
  //Optenemos la información de un docente
  getDocente(id: any) {
    return this.http.get(`${this.URL}/docente/${id}`);
  }

  listHorario(nif_docente: any) {
    return this.http.get(`${this.URL}/horario/horario-docente-grado-grupo/${nif_docente}`);
  }
  //Listamos todos los grados a los que pertenece un docente
  getGrados(nif_docente: any) {
    return this.http.get(`${this.URL}/grado/grados-docente/${nif_docente}`);
  }

  // Listamos todos los grupos de un grado por medio del identificador del grado
  listGruposGrado(id_grado: any) {
    return this.http.get(`${this.URL}/grado/grado-grupo/${id_grado}`);
  }

  // Listamos los alumnos segun el identificador del grado y del grupo
  listAlumnoGradoGrupo(id_grado: any, id_grupo: any) {
    return this.http.get(
      `${this.URL}/alumno/alumnos-grado-grupo/${id_grado}/${id_grupo}`
    );
  }

  // listamos las asignaturas según el docente y el grado
  listAsignaturasDocenteGrado(nif_docente: any, id_grado: any) {
    return this.http.get(
      `${this.URL}/asignatura/asignatura-docente-grado/${nif_docente}/${id_grado}`
    );
  }
  
  updateUser(id: any, user: any) {
    return this.http.put(`${this.URL}/docente/update/${id}`, user);
  }
}
