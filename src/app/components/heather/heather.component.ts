import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-heather',
  templateUrl: './heather.component.html',
  styleUrls: ['./heather.component.scss']
})

export class HeatherComponent implements OnInit {

  formulario:FormGroup;

  constructor(private fb:FormBuilder) {

    this.formulario=this.fb.group({
      texto:['']
    });

   }

  ngOnInit(): void {
  }

  buscarProducto(){
    console.log(this.formulario.get('texto')?.value);
  }

}
