import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Curso } from '@core/models/Curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  readonly URL = environment.api;

  constructor(private http: HttpClient) {}

  listCurso(){
    return this.http.get(`${this.URL}/admin/curso`)
  }

  getCiclo() {
    return this.http.get(`${this.URL}/admin/curso/ciclo`);
  }

  getGrupo(){
    return this.http.get(`${this.URL}/admin/curso/grupo`)
  }

  createCurso(grado: Curso) {
    return this.http.post(`${this.URL}/admin/curso/add`, grado);
  }
}
