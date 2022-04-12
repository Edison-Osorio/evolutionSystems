import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import decode from 'jwt-decode'

@Injectable({
  providedIn: 'root'
})
export class AuthLoginGuard implements CanActivate {

  constructor(
    private router: Router,
    private authService: AuthService,
    private cookie : CookieService
  ){}

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.authService.isAuth()){
      console.log('Ya inicio sesion');

      const expectedRole = route.data['expectedRole'];
      const token = (this.cookie.get('token')!);
      let decodetoken:any = {};
      decodetoken = decode(token);
      console.log(decodetoken.username);

      switch (expectedRole.rol) {
        case 'administrador':
              this.router.navigate(['/admin'])
              break;
            case 'docente':
              this.router.navigate(['/docente'])
              break;
            case 'estudiante':
              this.router.navigate(['/estudiante'])
              break;
          
            default:
              this.router.navigate([' / '])  
              break;;
      }

      
    }  


    return true;
  }
  
}
