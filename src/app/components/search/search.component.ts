import { Component, Input, OnInit } from '@angular/core';
import {Producto,NULO} from '../../interfaces/producto';
import {BuscarService} from '../../services/buscar.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  Lista=NULO;
  palabrafiltro:string="";
    
  constructor(private servicio:BuscarService) { }

  ngOnInit(): void {
    this.servicio.data.subscribe(datos =>{
      this.palabrafiltro=datos;
      console.log("recibiendo "+datos);
    });
  }

}
