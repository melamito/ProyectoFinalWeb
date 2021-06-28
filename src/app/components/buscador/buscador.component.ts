import { OnInit, Component } from '@angular/core'
import {Producto} from '../../interfaces/producto';
import {BuscarService} from '../../services/buscar.service'
import { ActivatedRoute } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.scss']
})
export class BuscadorComponent implements OnInit {

  buscarProductos = '';
 

  productos:Producto[]=[];
  constructor(private serviciobuscar:BuscarService) { }

  ngOnInit(): void {
  }
}
