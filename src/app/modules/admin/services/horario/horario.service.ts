import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class HorarioService {
  readonly URL = environment.api;
  constructor(private http: HttpClient) {}

  //Listamos todos los horarios
  listHorario() {
    return this.http.get(`${this.URL}/horario/`);
  }

  //Listamos un solo horario
  listOnHorario(id_horario: any) {
    return this.http.get(`${this.URL}/horario/on-horario/${id_horario}`);
  }

  // Listamos todos los horarios según el grado y el grupo al cual se le asigno ese horario
  listHorarioGradoGrupo(id_grado: any, id_grupo: any) {
    return this.http.get(
      `${this.URL}/horario/horario-grado-grupo/${id_grado}/${id_grupo}`
    );
  }

  //Creamos un horario
  createHorario(horario: any) {
    return this.http.post(`${this.URL}/horario/add-horario`, horario);
  }

  // Asignamos un horario a una asignatura
  createHorarioAsignatura(horario: any) {
    return this.http.post(
      `${this.URL}/horario/add-horario-asignatura`,
      horario
    );
  }

  //Actualizamos un horario
  updateHorario(id_horario: any, horario: any) {
    return this.http.put(
      `${this.URL}/horario/update-horario/${id_horario}`,
      horario
    );
  }
  //Eliminamos un horario
  deleteHorario(id_horario: any) {
    return this.http.delete(`${this.URL}/horario/delete-horario/${id_horario}`);
  }

  //Eliminamos un horario de una asignatura
  deleteHorarioAsignatura(id_horario: any, id_asignatura: any ){
    return this.http.delete(`${this.URL}/horario/delete-horario-asignatura/${id_horario}/${id_asignatura}`)
  }
}
