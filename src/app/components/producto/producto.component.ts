import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  constructor(private rta:ActivatedRoute) { }
  ruta:any;
  id:number=0;
  ngOnInit(): void {
    this.ruta=this.rta.params.subscribe(parametro=>{
      this.id=parametro['id'];
      console.log(this.id)
    });
  }

}
