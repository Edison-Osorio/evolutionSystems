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

  getAsignatura(id: any) {
    return this.http.get(`${this.URL}/docente/asignatura/${id}`);
  }

  getGrados(id: any) {
    return this.http.get(`${this.URL}/admin/doc_gra/${id}`);
  }

  getDocente(id: any) {
    return this.http.get(`${this.URL}/admin/docente/${id}`);
  }
  
    getNotas(id: any){
      return this.http.get(`${this.URL}/admin/nota/${id}`)
    }

  getTrimestres() {
    return this.http.get(`${this.URL}/admin/nota/trimestres/`);
    
  }

  updateNota(id_asi:number, id_alu:number, id_periodo:number, notas:any){
    return this.http.put(`${this.URL}/admin/nota/update/${id_asi}/${id_alu}/${id_periodo}`, notas)
  }

  updateUser(id: any, user: any) {
    return this.http.put(`${this.URL}/admin/docente/update/${id}`, user);
  }
}
