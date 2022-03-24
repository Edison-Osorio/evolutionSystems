import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../../services/students.service';
@Component({
  selector: 'app-students-start',
  templateUrl: './students-start.component.html',
  styleUrls: ['./students-start.component.css']
})
export class StudentsStartComponent implements OnInit {

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
    // this.studentService.getStudent().subscribe(
    //   res => {

    //   }

    // )
  }

}
