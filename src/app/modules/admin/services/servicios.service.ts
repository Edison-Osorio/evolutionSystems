import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {
  URL = environment.api
  constructor(private http: HttpClient) { }
 
  //obtener servicios
  getServices(){
    return this.http.get(`${this.URL}/admin/servicios`)
  }
   
  createAlu_ser(alu_ser:any){
    return this.http.post(`${this.URL}/admin/alu_ser/add/`,alu_ser)
  }

  deleteAlu_Ser(id_alumno:number,cod_servicio:number){
    return this.http.delete(`${this.URL}/admin/alu_ser/delete/${id_alumno}/${cod_servicio}`)
  }

  getAlu_Ser(){
    return this.http.get(`${this.URL}/admin/alu_ser`)
  }
  getOne(id_alumno:any,cod_servicio:any){
    return this.http.get(`${this.URL}/admin/alu_ser/${id_alumno}/${cod_servicio}`)
  }
}
