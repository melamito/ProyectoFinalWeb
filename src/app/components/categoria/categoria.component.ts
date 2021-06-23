import { Component, OnInit } from '@angular/core';
import {Producto,ListaProductos} from '../../interfaces/producto';
import {BuscarService} from '../../services/buscar.service'
import { ActivatedRoute } from '@angular/router';
import { newArray } from '@angular/compiler/src/util';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  Lista:Array<Producto>=[];
  productos:Array<Producto>=[];
  constructor(private route:ActivatedRoute, private serviciobuscar:BuscarService ) { }
  ruta:any;
  sexo:number=0;
  cat:number=0;

  ngOnInit(): void {
    this.serviciobuscar.Buscarproducto().subscribe(datos=>{
      for (var index in datos){
        this.Lista.push(datos[index])
      }
    });

    this.ruta=this.route.params.subscribe(parametro=>{
      this.sexo=parametro['sexo'];
      this.cat=parametro['cat'];
      
      this.productos.length=0;
      var i=0;
      for(var item in this.Lista){
        if((this.Lista[item].sexo==this.sexo && this.Lista[item].categoria==this.cat) || (this.Lista[item].sexo==this.sexo && this.cat==0)){
            this.productos[i]=this.Lista[item];
            i++;
        }
      }
    });
  }

}
