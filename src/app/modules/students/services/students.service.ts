import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  readonly URL = environment.api

  constructor(private http: HttpClient) { }

  notas(id: any){
    return this.http.get(`${this.URL}/alumno/notas/${id}`)
  }




   getStudent(id:string){
     return this.http.get('${this.API_URI}/ruta/${id}');
   }
}
