import { Component, OnInit } from '@angular/core';
import { NULO, Usuario } from '../../interfaces/usuario'
import {BuscarService} from '../../services/buscar.service'
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.scss']
})
export class CuentaComponent implements OnInit {

  //----- Variables ------
  usuario:Usuario=NULO
  sesion:number=0
  formulario = new FormGroup({});

  constructor(private serviciobuscar:BuscarService) { }

  ngOnInit(): void {
    let sesion=localStorage.getItem('sesion')
    if(!sesion){
      window.location.href="/sesion"
    }else{
      this.sesion=parseInt(sesion)
      this.serviciobuscar.BuscarClienteId(this.sesion).subscribe(dato=>{
        this.usuario=dato[0]
        console.log("Sesion iniciada:",this.usuario.nombres)
      })
    }
  }

  cerrarSesion(event:Event){
    console.log("holi")
    localStorage.clear()
    window.location.href="/sesion"
  }

}
