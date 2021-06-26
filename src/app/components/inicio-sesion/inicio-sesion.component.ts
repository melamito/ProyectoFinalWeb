import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.scss']
})
export class InicioSesionComponent implements OnInit {

siteKey: string;


  constructor() {
    this.siteKey = '6LejhFgbAAAAAF2O6ULxiOp4N78L2rQey9grLd2L';
   }

  ngOnInit(): void {
  }

}
