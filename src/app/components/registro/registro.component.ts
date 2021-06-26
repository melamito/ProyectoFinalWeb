import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'
import { Provincia } from '../../interfaces/provincia'
import { Region } from '../../interfaces/region'
import { Comuna } from '../../interfaces/comuna'
import { Usuario } from '../../interfaces/usuario'
import {BuscarService} from '../../services/buscar.service'

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(private servicio:BuscarService) {
    this.buildForm();
  }

  formulario: FormGroup=new FormGroup({
    nombres: new FormControl('', [Validators.required]),
    apellidos: new FormControl('', [Validators.required]),
    correo: new FormControl('', [Validators.email]),
    rut: new FormControl('', [Validators.maxLength(10)]),
    region: new FormControl('', [Validators.required]),
    provincia: new FormControl('', [Validators.required]),
    comuna: new FormControl('', [Validators.required]),
    direccion: new FormControl('', [Validators.required]),
    contraseña: new FormControl('', [Validators.required])
  });

  idregion: number= 0;
  idprovincia:number=0;
  agregar:boolean=true;

  listaClientes:Array<Usuario>=[];
  listaRegiones:Array<Region>=[];
  listaProvincias:Array<Provincia>=[];
  listaComunas:Array<Comuna>=[];
  nuevo:Usuario={
    id:0,
    nombres:"",
    apellidos:"",
    rut:"",
    direccion:"",
    region:0,
    provincia:0,
    comuna:0,
    correo:"",
    contraseña:"",
    admi:0
  }

  ngOnInit(): void {
    this.servicio.Regiones().subscribe(Regiones=>{
      this.listaRegiones=Regiones;
    });
    
    this.servicio.Buscarcliente().subscribe(respuesta=>{
      for (var index in respuesta){
        this.listaClientes=respuesta;
      }
    })
  }

  private buildForm() {
    this.formulario = new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      correo: new FormControl('', [Validators.email]),
      rut: new FormControl('', [Validators.maxLength(10)]),
      region: new FormControl('', [Validators.required]),
      provincia: new FormControl('', [Validators.required]),
      comuna: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      contraseña: new FormControl('', [Validators.required])
    });

    this.formulario.valueChanges
    .subscribe(value => {
      this.idregion=value.region;
      this.idprovincia=value.provincia;

      if (this.idregion!=0){
        this.servicio.Provincias(this.idregion).subscribe(Provincias=>{
          this.listaProvincias=Provincias;
        });
      } 
      if (this.idprovincia!=0){
        this.servicio.Comunas(this.idprovincia).subscribe(Comunas=>{
          this.listaComunas=Comunas;
        });
      }
    });
  }

  save(event:Event){
    this.agregar=true;
    event.preventDefault();
    const valor=this.formulario.value;
    this.nuevo.nombres=valor.nombres
    this.nuevo.apellidos=valor.apellidos
    this.nuevo.rut=valor.rut
    this.nuevo.direccion=valor.direccion
    this.nuevo.region=valor.region
    this.nuevo.provincia=valor.provincia
    this.nuevo.comuna=valor.comuna
    this.nuevo.correo=valor.correo
    this.nuevo.contraseña=valor.contraseña

    for (var index in this.listaClientes){
      console.log("comparando ",this.nuevo.rut," con ",this.listaClientes[index].rut )
      if (this.nuevo.rut==this.listaClientes[index].rut){
        this.agregar=false;
        console.log("Ya existe el rut")
      }
      console.log("comparando ",this.nuevo.correo," con ",this.listaClientes[index].correo )
      if (this.nuevo.correo===this.listaClientes[index].correo){
        this.agregar=false;
        console.log("Ya existe el correo")
      }
    }
    
    this.servicio.crearCliente(this.nuevo).subscribe(respuesta=>{
      console.log(respuesta)
    });
  }
}
