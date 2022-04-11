import { environment } from './../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private cookie: CookieService) {}

  private URL = environment.api;

  signup(user: any) {
    return this.http.post(`${this.URL}auth/signup`, user);
  }

  updateUser(user: any) {
    const { password, email } = user;

    console.log({ password });
    console.log({ email });

    return this.http.put(`${this.URL}/updateUser/${email}`, { password });
  }

  signin(user: any) {
    return this.http.post(`${this.URL}auth/signin`, user);
  }
  isAuth(): boolean {
    const token = this.cookie.get('token');
    if (!this.cookie.get('token')
    ) {
      return false;
    }
    return true;
  }
}

