import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms';
import {BuscarService} from '../../services/buscar.service'

@Component({
  selector: 'app-heather',
  templateUrl: './heather.component.html',
  styleUrls: ['./heather.component.scss']
})

export class HeatherComponent implements OnInit {

  formulario:FormGroup;
  palabraFiltro:string="";

  constructor(private fb:FormBuilder, private servicio:BuscarService) {

    this.formulario=this.fb.group({
      buscar:['']
    });

   }

  ngOnInit(): void {
  }

  buscarProducto(){
    var valor:string=this.formulario.get("buscar")?.value;
    this.servicio.data.next(valor)
    //console.log(this.formulario.get('buscar')?.value);
  }

}
