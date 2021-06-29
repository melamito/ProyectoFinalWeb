import { Component, Input, OnInit } from '@angular/core';
import {Producto,NULO} from '../../interfaces/producto';
import {BuscarService} from '../../services/buscar.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  Lista:Array<Producto>=[];
  palabrafiltro:string="";
    
  constructor(private servicio:BuscarService) { }

  ngOnInit(): void {
    this.servicio.Buscarproducto().subscribe(prod=>{
      this.Lista=prod;
    });
    this.servicio.data.subscribe(datos =>{
      this.palabrafiltro=datos;
      console.log("recibiendo "+datos);
    });
  }

  

}

/*
Lista:Array<Producto>=[];
  palabrafiltro:string="";




this.servicio.data.subscribe(datos =>{
      this.palabrafiltro=datos;
      console.log("recibiendo "+datos);
    });

    this.servicio.Buscarproducto().subscribe(prod=>{
      var i=0;
      this.Lista=[];
      for(var index in prod){
        if((prod[index].nombre==this.palabrafiltro))
        this.Lista.push(prod[index]);
        console.log(prod[index])
        console.log(this.Lista[i]);
        i++;
        console.log("entro a la funcion");
      }
*/