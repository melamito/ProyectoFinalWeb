import { Component, OnInit } from '@angular/core';
import {Producto,ListaProductos} from '../../interfaces/producto';
import { ActivatedRoute } from '@angular/router';
import { newArray } from '@angular/compiler/src/util';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  Lista=ListaProductos;
  productos:Producto[]=[];
  constructor(private route:ActivatedRoute) { }
  ruta:any;
  sexo:number=0;
  cat:number=0;

  ngOnInit(): void {
    this.ruta=this.route.params.subscribe(parametro=>{
      this.sexo=parametro['sexo'];
      this.cat=parametro['cat'];
      
      this.productos.length=0;
      var i=0;
      for(var item in ListaProductos){
        if((ListaProductos[item].sexo==this.sexo && ListaProductos[item].categoria==this.cat) || (ListaProductos[item].sexo==this.sexo && this.cat==0)){
            console.log(ListaProductos[item].nombre)
            this.productos[i]=ListaProductos[item];
            i++;
        }
      }
    });
  }

}
