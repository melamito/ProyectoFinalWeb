import { Component, OnInit } from '@angular/core';
import {Producto} from '../../interfaces/producto';
import {BuscarService} from '../../services/buscar.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  
  productos:Array<Producto>=[]

  constructor(private serviciobuscar:BuscarService) { }
  
  ngOnInit(): void {
    this.serviciobuscar.Buscarproducto().subscribe(datos=>{
      for (var index in datos){
        this.productos.push(datos[index])
      }
      console.log("Leido de la base de datos!");
    });
  }

}
