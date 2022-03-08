import { Component, OnInit } from '@angular/core';
import { User } from '@core/models/User';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  user: User = {
    // email: 'osorio@gmail.com',
    // password: '12345',
    // tipoDocumento:'1',
    documento: '',
    contrasena: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

  send(){
    
  }

}
