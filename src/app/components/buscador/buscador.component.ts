import { Component, OnInit } from '@angular/core';
import {Producto,ListaProductos} from '../../interfaces/producto';
import {BuscarService} from '../../services/buscar.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  Lista=ListaProductos;
  productos:Producto[]=[];
  constructor(private serviciobuscar:BuscarService) { }

  ngOnInit(): void {
  }

}
