import { Component, OnInit } from '@angular/core';
import {Producto} from '../../interfaces/producto';
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

    this.ruta=this.route.params.subscribe(parametro=>{
      this.sexo=parametro['sexo'];
      this.cat=parametro['cat'];
      

      this.serviciobuscar.Buscarproducto().subscribe(datos=>{
        var i=0;
        this.productos=[]
        for (var index in datos){
          if((datos[index].sexo==this.sexo && datos[index].categoria==this.cat) || (datos[index].sexo==this.sexo && this.cat==0)){
            this.productos.push(datos[index]);
            console.log(datos[index])
            console.log(this.productos[i])
            i++;
          }
          
        }
      });
  
      console.log("Leido todo")
    });
  }

}
