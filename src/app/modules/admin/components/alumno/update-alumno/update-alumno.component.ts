import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-alumno',
  templateUrl: './update-alumno.component.html',
  styleUrls: ['./update-alumno.component.css']
})
export class UpdateAlumnoComponent implements OnInit {

  @Input() codigo:any 

  constructor() { }

  ngOnInit(): void {

    console.log('Esta es la variable codigo de actualizar', this.codigo);
    
  }

}
