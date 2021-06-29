import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BuscarService} from '../../services/buscar.service'
import {Producto,NULO} from '../../interfaces/producto';
import { FormGroup,FormBuilder,FormControl,Validators } from '@angular/forms'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  

  constructor(private route:ActivatedRoute, private serviciobuscar:BuscarService) { }
  //----- variables -----
  producto:Producto=NULO;
  ruta:any;
  id:number=0;
  formulario = new FormGroup({});

  
  ngOnInit(): void {
    this.ruta=this.route.params.subscribe(parametro=>{
      this.id=parametro['id'];

      this.serviciobuscar.BuscarPorId(this.id).subscribe(dato=>{
        this.producto=dato[0];
      });
    });
  }

  carrito(event:Event){
    event.preventDefault();
    let sesion=localStorage.getItem('sesion')
    if(!sesion){
      window.location.href="/sesion"
    }else{
      console.log("buenas buenaaaaas")
    }
    
  }
}
