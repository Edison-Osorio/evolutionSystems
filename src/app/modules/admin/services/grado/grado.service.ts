import { EventEmitter, Injectable, Output } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Grado } from '@core/models/grado';

@Injectable({
  providedIn: 'root'
})
export class GradoService {
  @Output() gradosEmitidos: EventEmitter<any> = new EventEmitter()
  @Output() gradoEmitido: EventEmitter<any> = new EventEmitter()

  readonly URL = environment.api;
  constructor(private http:HttpClient) { }

  // listamos todo los grupos registrados
  listGrados(){
    return this.http.get(`${this.URL}/grado/grado`)
  }

  // Listamos todos los grupos
  listGrupos(){
    return this.http.get(`${this.URL}/grado/grupo`)
  }

  // Listamos todos los grados con sus grupos
  listAllGradosGrupos(){
    return this.http.get(`${this.URL}/grado/grado-grupo`)
  }

// Listamos todos los grupos de un grado por medio del identificador del grado
listGruposGrado(id_grado:any){
return this.http.get(`${this.URL}/grado/grado-grupo/${id_grado}`)
}








  // Creamos un grado
  createGrado(grado: Grado){
  return this.http.post(`${this.URL}/grado/add-grado`, grado)
  }

  // Creamos un grupo
  createGrupo(grupo : any){
    return this.http.post(`${this.URL}/grado/add-grupo`, grupo)
  }

  // Asignamos un grupo a un grado
  createAsignacionGrupoGrado(grupo: any){
    return this.http.post(`${this.URL}/grado/add-grupo-grado`, grupo)
  }

  // Actualizamos la información de un grado
  updateGrado(id_grado: any, grado:Grado){
    return this.http.put(`${this.URL}/grado/update-grado/${id_grado}`, grado)
  }

  // Eliminamos un grado
  deleteGrado(id_grado: any){
    return this.http.delete(`${this.URL}/grado/delete-grado/${id_grado}`)
  }

  // Eliminamos la asignación de un grupo a un curso
  deleteAsignacionGrupoGrado(id_grado: any, id_grupo:any){
    return this.http.delete(`${this.URL}/grado/delete-grupo-grado/${id_grado}/${id_grupo}`)
  }



}
