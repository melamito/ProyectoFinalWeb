import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'
import {BuscarService} from '../../services/buscar.service'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

siteKey: string;

  constructor(private servicio:BuscarService) {
    this.siteKey = '6LejhFgbAAAAAF2O6ULxiOp4N78L2rQey9grLd2L';
    this.buildForm();
   }

   formulario = new FormGroup({
    usuario: new FormControl('', [Validators.email]),
    contraseña: new FormControl('', [Validators.required])
  });

  mensaje:string=""

   private buildForm() {
    this.formulario = new FormGroup({
      usuario: new FormControl('', [Validators.email]),
      contraseña: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    this.mensaje="";
  }

  search(event:Event){
    const form=this.formulario.value
    console.log("Buenas bueeeeeeenas")
    this.servicio.Login(form.usuario,form.contraseña).subscribe(respuesta=>{
      console.log(respuesta)
    })
  }

}
