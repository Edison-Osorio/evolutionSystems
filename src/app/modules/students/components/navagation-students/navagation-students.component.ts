import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navagation-students',
  templateUrl: './navagation-students.component.html',
  styleUrls: ['./navagation-students.component.css']
})
export class NavagationStudentsComponent implements OnInit {

  constructor(private cookie: CookieService, private router:Router) { }

  ngOnInit(): void {
  }
  
  salir(){
this.cookie.delete('token', '/')
this.router.navigate(['/'])
  }

}
