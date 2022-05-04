import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Docente } from '@core/models/Docente';
import { User } from '@core/models/User';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {
  URL = environment.api;

  @Output() codigoDocente: EventEmitter<any> = new EventEmitter()

  constructor(private http: HttpClient) {}

  // Obtener toda la lista de docentes
  getDocente() {
    return this.http.get(`${this.URL}/docente/`);
  }

  // Obtener un docente segun su identificación
  getOneDocente(nif_doc: number | string) {
    return this.http.get(`${this.URL}/docente/${nif_doc}`);
  }
  // Obtenemos un usuario de la tabla Usuario
  getOneUsuario(id_alu:any){
    return this.http.get(`${this.URL}/auth/list/${id_alu}`)
    }

  // Obtener toda la lista de las categorias
  getCategorias(){
    return this.http.get(`${this.URL}/docente/categoria`)
  }
  // Crear usuario en la tabla docente
  createDocente(docente: Docente) {
    return this.http.post(`${this.URL}/docente/add-docente`, docente);
  }
// Crear usuario en la table Usuario
  createUser(user: User) {
    return this.http.post(`${this.URL}/auth/signup`, user)
  }
// Actualiza la información del docente en la tabla docente
  updateDocente(nif_doc: number | string, docentes: Docente) {
    return this.http.put(
      `${this.URL}/docente/update/${nif_doc}`,
      docentes
    );
  }
  // Actualiza la información del docente en la tabla de usuario
  updateUser(id:number | string, user:User){
    return this.http.put(`${this.URL}/auth/update/${id}`, user)
  }

  // Elimina el docente de la tabla docente
  deleteDocente(nif_doc: number) {
    return this.http.delete(`${this.URL}/docente/delete/${nif_doc}`);
  }
  // Elimina el docente de la tabla de usuario
  deleteUser(nif_doc:any){
    return this.http.delete(`${this.URL}/auth/delete/${nif_doc}`)
  }
}
