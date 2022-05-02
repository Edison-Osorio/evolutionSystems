import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { Curso } from '@core/models/Curso';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  @Output() cursosEmitidos: EventEmitter<any> = new EventEmitter()
  @Output() cursoEmitido: EventEmitter<any> = new EventEmitter()
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

  // Listamos los cursos con sus grupos
  getCursoGrupo(){
return this.http.get(`${this.URL}/admin/curso/curso-grupo`)
  }

  // LISTAMOS LOS GRUPOS DE UN CURSO POR MEDIO DEL IDENTIFICADOR DEL CURSO
  listOnCursoGrupos(id: any){
return this.http.get(`${this.URL}/admin/curso/crusoGrupo/${id}`)
  }

  createCurso(grado: Curso) {
    return this.http.post(`${this.URL}/admin/curso/add`, grado);
  }

  // CREAMOS LA ASIGNACION DE UN GRUPO A UN CURSO
  createGrupoCurso(grupo:any){
return this.http.post(`${this.URL}/admin/curso/addGrupoCurso`, grupo)
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

  // Creamos las asignaturas
  createAsignatura(asignatura:any){
    return this.http.post(`${this.URL}/admin/asignatura/add`, asignatura )
  }

  // Asignamos una asignatura a un grado
  createAsignacion(curso_asignatura: any){
    return this.http.post(`${this.URL}/admin/asignatura/addAsignacion`, curso_asignatura)
  }

  // Actualizamos las asignaturas
  updateAsignatura(id: number , asignatura: any){
    return this.http.put(`${this.URL}/admin/asignatura/update/${id}`, asignatura)
  }

  // Eliminamos las asignaturas
  deleteAsignatura(id: number){
    return this.http.delete(`${this.URL}/admin/asignatura/delete/${id}`)
  }

  // Eliminamos las asignaciones de las asignaturas
  deleteAsignacion(curso_asignatura: any){
   console.log('Este es el curso_asignatura--> ',curso_asignatura)
    return this.http.delete(`${this.URL}/admin/asignatura/delete-asignacion/${curso_asignatura.id_asignatura_cs}/${curso_asignatura.id_curso_cs}`)
  }

  getGrados(id: any) {
    return this.http.get(`${this.URL}/admin/doc_gra/${id}`);
  }

  getDocente(id: any) {
    return this.http.get(`${this.URL}/admin/docente/${id}`);
  }

    getNotas(id_curso: any, id_grupo: any){
      return this.http.get(`${this.URL}/admin/nota/${id_curso}/${id_grupo}`)
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

  notas(id: any){
    return this.http.get(`${this.URL}/alumno/notas/${id}`)
  }

  deleteNota(alumno: any){
    return this.http.delete(`${this.URL}/admin/nota/delete/${alumno.id_alu}`)
  }

}
