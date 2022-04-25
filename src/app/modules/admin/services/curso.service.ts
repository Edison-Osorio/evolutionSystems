import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Curso } from '@core/models/Curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  @Output() cursosEmitidos: EventEmitter<any> = new EventEmitter()
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

  // Elimina el curso
  deleteCurso(id_curso :any){
    return this.http.delete(`${this.URL}/admin/curso/delete/${id_curso}`)
  }

  // OBTENEMOS LOS SERVICOS PARA MOSTRAR LOS ALUMNOS DE CADA UNO DE LOS CURSOS

  getEstudiantes(cod_gra: number | string) {
    return this.http.get(`${this.URL}/admin/estudiante/${cod_gra}`);
  }

  // Obtenemos toda la lista de asignturas
  getListAsignaturas(){
    return this.http.get(`${this.URL}/admin/asignatura/`)
  }

  getAsignatura(id: any) {
    return this.http.get(`${this.URL}/admin/asignatura/asignatura/${id}`);

  }

  getAsignaturaCurso(id:any){
    return this.http.get(`${this.URL}/admin/asignatura/asignatura-curso/${id}`)
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
