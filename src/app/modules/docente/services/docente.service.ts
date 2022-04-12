import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DocenteService {
  readonly URL = environment.api;

  constructor(private http: HttpClient) {}


  getEstudiantes(cod_gra: number | string) {
    return this.http.get(`${this.URL}/admin/estudiante/${cod_gra}`);
  }

  getProgramador(id: any) {
    return this.http.get(`${this.URL}/docente/programador/${id}`);
  }

  getGrados(id: any) {
    return this.http.get(`${this.URL}/admin/doc_gra/${id}`);
  }

  getDocente(id: any) {
    return this.http.get(`${this.URL}/admin/docente/${id}`);
  }

  updateUser(id: any, user: any) {
    return this.http.put(`${this.URL}/admin/docente/update/${id}`, user);
  }
}
