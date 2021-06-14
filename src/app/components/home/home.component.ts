import { Component, OnInit } from '@angular/core';
import {Producto,ListaProductos} from '../../interfaces/producto';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  

  Lista=ListaProductos;
  
  constructor() { }
  
  ngOnInit(): void {
  }

}
