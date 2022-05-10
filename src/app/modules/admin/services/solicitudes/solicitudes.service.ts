import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SolicitudesService {

  readonly URL = environment.api
  constructor(private http:HttpClient) { }

  // obtiene las solicitudes
  getSolicitudes(){
    return this.http.get(`${this.URL}/solicitudes`)
  }

  // se confirma la solicitud y se asigna el servicio solicitado
  createAlumno_servicio(alumno_servicio: any) {
    return this.http.post(`${this.URL}/alumno_servicio/add/`, alumno_servicio)
  }

  // elimina la solicitud
  eliminarSolicitud(id_mensaje:any){
    return this.http.delete(`${this.URL}/solicitudes/delete/${id_mensaje}`)
  }

  //cuenta la solicitud 
  contarSolicitudes(){
    return this.http.get(`${this.URL}/solicitudes/total`)
  }

}
