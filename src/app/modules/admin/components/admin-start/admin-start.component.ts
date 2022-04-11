import { AluSerService } from '@modules/admin/services/alu_ser/alu-ser.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-start',
  templateUrl: './admin-start.component.html',
  styleUrls: ['./admin-start.component.css'],
})
export class AdminStartComponent implements OnInit {
 

  constructor(private AlumService:AluSerService) { }

  ngOnInit(): void {
    this.getAluSer();
  }

  getAluSer(){
    this.AlumService.getAlu_ser().subscribe(
      res => {
        console.log(res)
      },
      err=>console.log(err)
    )

  }

 
}
