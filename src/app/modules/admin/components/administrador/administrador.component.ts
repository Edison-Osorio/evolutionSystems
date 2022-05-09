import { Component, OnInit } from '@angular/core';
import { AdminService } from '@modules/admin/services/admin/admin.service';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  constructor(private administradorServicios:AdminService) { }
  administradores:any=[]
  administrador:any={
    tipoDocumento:1,
    documento:'',
    nombre:'',
    email:'',
    rol:'administrador',
    contrasena:''
  }

  // obtinene los administradores
  ngOnInit(): void {
    this.administradorServicios.getAdministradores().subscribe(
      res =>{
        this.administradores=res
      },err=> console.log(err)
    )
  }

  // refresca el modelo
  refresh(){
    this.administrador.tipoDocumento=1
    this.administrador.documento=''
    this.administrador.nombre=''
    this.administrador.email=''
    this.administrador.rol='administrador'
    this.administrador.contrasena=''
  }

  //crea el administrador
  createAdministrador(){
    if (confirm('¿ Esta seguro de agregar un nuevo administrador ?')) {
      this.administradorServicios.createUser(this.administrador).subscribe(
        res=>{
          alert('Se ha creado un nuevo administrador')
          {document.location.reload()}
        },err=>console.log(err)
      )
    }else{
      alert ('Se cancelo ')
      {document.location.reload()}
      this.refresh()
    }
  }

  //elimina el alministrador
  deleteAdministrador(documento:any){
    if (confirm(`¿ Esta seguro de elimar este adminstrador ${documento} ?`)) {
      this.administradorServicios.deleteAdministrador(documento).subscribe(
        res=>{
          alert('Se elimino con exito')
          {document.location.reload()}
        },err=>console.log('!ERROR --> ',err)
      )
    }else{
      alert('Se cancelo ')
    }
  }

}
