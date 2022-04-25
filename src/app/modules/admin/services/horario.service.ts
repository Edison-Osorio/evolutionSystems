import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  URL = environment.api
  constructor(private http: HttpClient) { }
  //obtener todos
  getHorario() {
    return this.http.get(`${this.URL}/admin/horario`)
  }
  // crear 
  crateHorario(horario: any) {
    return this.http.post(`${this.URL}/admin/horario/add`, horario)
  }
  //eliminar
  deleteHorario(cod_hor: any) {
    return this.http.delete(`${this.URL}/admin/horario/delete/${cod_hor}`)
  }
  //actualizar
  updateHorario(cod_hor: number | string, horario: any) {
    return this.http.put(`${this.URL}/admin/horario/update/${cod_hor}`, horario)
  }
  //obtener uno
  getOnoHorario(cod_hor: any) {
    return this.http.get(`${this.URL}/admin/horario/${cod_hor}`)
  }
}
