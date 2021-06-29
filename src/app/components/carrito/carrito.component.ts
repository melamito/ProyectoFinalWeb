import { Component, OnInit } from '@angular/core';
import {Producto} from '../../interfaces/producto';
import {BuscarService} from '../../services/buscar.service';
import { ActivatedRoute } from '@angular/router';
import { newArray } from '@angular/compiler/src/util'; 

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  
  constructor(private route:ActivatedRoute, private serviciobuscar:BuscarService) { }
  Lista:Array<Producto>=[];
  productos:Array<Producto>=[];
  precio:number=0;
  ruta:any;
  cantidad:number=0;
  
  ngOnInit(): void {
    let sesion=localStorage.getItem('sesion')
    if(!sesion){
      window.location.href="/sesion"
    }
    this.serviciobuscar.Buscarproducto().subscribe(datos=>{
      this.productos=datos
    })
  }
}
