import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { Observable } from 'rxjs';
import decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class RolGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookie: CookieService
  ){}

  canActivate(
    route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      const expectedRole = route.data['expectedRole'];
      const token = (this.cookie.get('token')!);
      let decodetoken:any = {};
      decodetoken = decode(token);
      console.log(decodetoken.username);
  
      if( !this.authService.isAuth() || decodetoken.rol !== expectedRole){
        console.log('Usuario no autorizado para la vista');
        this.router.navigateByUrl('auth/login');
        return false;
      }

    return true;
  }
  
}
