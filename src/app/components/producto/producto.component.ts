import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Producto,ListaProductos} from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  Productos=ListaProductos;

  constructor(private route:ActivatedRoute) { }
  ruta:any;
  id:number=0;

  
  ngOnInit(): void {
    this.ruta=this.route.params.subscribe(parametro=>{
      this.id=parametro['id'];
    });
  }

}
