import { Component, OnInit } from '@angular/core';
import {Producto} from '../../interfaces/producto';
import {BuscarService} from '../../services/buscar.service'

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.scss']
})
export class CarritoComponent implements OnInit {
  
  productos:Array<Producto>=[]

  constructor() { }

  ngOnInit(): void {
  }

}
