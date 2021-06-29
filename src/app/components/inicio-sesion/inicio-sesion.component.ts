import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'
import {BuscarService} from '../../services/buscar.service'
import { Usuario, NULO } from '../../interfaces/usuario'

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

siteKey: string;
  validacion: boolean = false;
  constructor(private servicio:BuscarService) {
    this.siteKey = '6LejhFgbAAAAAF2O6ULxiOp4N78L2rQey9grLd2L';
    this.buildForm();
   }

   formulario = new FormGroup({
    usuario: new FormControl('', [Validators.email]),
    contraseña: new FormControl('', [Validators.required]),
    captcha: new FormControl('', [Validators.required])
  });

 //---- Variables --------
  mensaje:string=""
  usuario:Usuario=NULO
   private buildForm() {
    this.formulario = new FormGroup({
      usuario: new FormControl('', [Validators.email]),
      contraseña: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    let sesion=localStorage.getItem('sesion')

    if (sesion){
      window.location.href="/cuenta"
    }
    this.mensaje="";
  }

  search(event:Event){
  if(!this.validacion){
    alert('captcha no completado');
    this.mensaje="Completa el captcha"
  }else{
    const form=this.formulario.value
    this.servicio.Login(form.usuario,form.contraseña).subscribe(respuesta=>{
      if(respuesta.lenght==0){
        this.mensaje="Correo y/o clave incorrecta"
      }else{
        this.usuario=respuesta[0];
        localStorage.setItem('sesion',JSON.stringify(this.usuario.id))
        window.location.href="/cuenta"
      }
    });
  }
  }
  handleSuccess(event:any){
    this.validacion=true;
  }

}
