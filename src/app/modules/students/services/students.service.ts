import { Injectable } from '@angular/core';
import { HttpBackend, HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }






   getStudent(id:string){
     return this.http.get('${this.API_URI}/ruta/${id}');
   }
}
