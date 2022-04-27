import { Component, OnInit } from '@angular/core';
import { StudentsService } from '@modules/students/services/students.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor(private studentsService:StudentsService) { }

  ngOnInit(): void {
    this.notas()
  }

  notas(){
    this.studentsService.notas(12345).subscribe(
      res=> console.log('Estas son las notas -->', res)
    )
  }

}
