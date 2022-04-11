import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AluSerService {
  API_URI = 'http://localhost:3000/api/admin'
  constructor(private http:HttpClient) { }
  getAlu_ser(){
    return this.http.get(`${this.API_URI}/alu_ser`);
  }
}
