import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programador',
  templateUrl: './programador.component.html',
  styleUrls: ['./programador.component.css']
})
export class ProgramadorComponent implements OnInit {
  g='11'
  f='02/02/2021'
 l='8:00am A 10:00am'


  constructor() { }

  ngOnInit(): void {
  }

}
