import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navagation-docente',
  templateUrl: './navagation-docente.component.html',
  styleUrls: ['./navagation-docente.component.css']
})
export class NavagationDocenteComponent implements OnInit {

  user: any = 'Juan Fernando'

    constructor() { }

  ngOnInit(): void {
  }

}
