import { Component, OnInit } from '@angular/core';
import { DocenteService } from '@modules/docente/services/docente.service';
import { CookieService } from 'ngx-cookie-service';
import decode from 'jwt-decode';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css'],
})
export class GruposComponent implements OnInit {
  grados: any = [];
  hidden: boolean = false;
  estudiantes: any = [];

  constructor(
    private docenteService: DocenteService,
    private cookie: CookieService,
    private activedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.decodeToken();
    this.getGrados();
  }

  decodeToken() {
    const token = this.cookie.get('token')!;
    let decodetoken: any = {};
    decodetoken = decode(token);

    return decodetoken.documento;
  }

  getGrados() {
    this.docenteService.getGrados(this.decodeToken()).subscribe((res: any) => { 
      this.grados = res;
    });
  }
}
