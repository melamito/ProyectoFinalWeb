import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {BuscarService} from '../../services/buscar.service'
import {Producto,NULO} from '../../interfaces/producto';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  

  constructor(private route:ActivatedRoute, private serviciobuscar:BuscarService) { }
  producto:Producto=NULO;
  ruta:any;
  id:number=0;

  
  ngOnInit(): void {
    this.ruta=this.route.params.subscribe(parametro=>{
      this.id=parametro['id'];

      this.serviciobuscar.BuscarPorId(this.id).subscribe(dato=>{
        this.producto=dato[0];
        console.log("Encontrado:",dato)
        console.log("Encontrado 2:",dato[0])
      });
    });
  }

}
