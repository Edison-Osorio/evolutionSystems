import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {

  user='01'
  a='juan fernando'
  b='castillo rueda'
  c='masculino'
  d='18'
  e='cc'
  f='1001605598' 
  g='3155189616' 
  h='@gmam' 
  i='venecia-concordia' 
  
  user1='02'
  a1='maria isabel'
  b1='perez soto'
  c1='femenino'
  d1='18'
  e1='cc'
  f1='1001626546' 
  g1='3157389430' 
  h1='@dfff' 
  i1='venecia' 



  constructor() { }

  ngOnInit(): void {
  }

}
