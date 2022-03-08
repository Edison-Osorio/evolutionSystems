import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient,) {}

  private URL = environment.api

  signup(user: any) {
    return this.http.post(`${this.URL}/signup`, user);
  }


  updateUser(user:any){
    
    const{password, email}= user;
    
    console.log({password});
    console.log({email});
    
    return this.http.put(`${this.URL}/updateUser/${email}`, {password})
  }

  signin(user: any) {
    return this.http.post(`${this.URL}/signin`, user);
  }
  // isAuth(): boolean {
  //   const token = localStorage.getItem('token');
  //   if (
  //     this.jwtHelper.isTokenExpired(token!) ||
  //     !localStorage.getItem('token')
  //   ) {
  //     return false;
  //   }
  //   return true;
  // }
}
