import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  user='juan castillo'
  user4='boyaco'
  t1='90'
  p1='80'
  t2='20'
  p2='90'
  t3='70'
  p4='50'

  user1='mongui'
  user2='edison'
  user3='la pepa'
  tt='99.99999%'

  constructor() { }

  ngOnInit(): void {
  }

}
