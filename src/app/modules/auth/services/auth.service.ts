import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { User } from '@core/models/User';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  private URL = environment.api;

  signup(user: any) {

    return this.http.post(`${this.URL}/auth/signup`, user);
  }


  signin(user: any) {
    return this.http.post(`${this.URL}/auth/signin`, user);

  }

  getOnUser(user: any) {
    return this.http.post(`${this.URL}/auth/getOnUser/`, user);
  }

  updateUser(user: any) {
    return this.http.put(`${this.URL}/auth/updateUser`, user);
  }

  isAuth(): boolean {
    const token = this.cookie.get('token');
    if (!this.cookie.get('token')) {
      return false;
    }
    return true;
  }
}
