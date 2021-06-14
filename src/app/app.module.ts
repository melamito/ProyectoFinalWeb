import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeatherComponent } from './components/heather/heather.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioSesionComponent } from './components/inicio-sesion/inicio-sesion.component';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { QuieneSomosComponent } from './components/quiene-somos/quiene-somos.component';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { TrabajoComponent } from './components/trabajo/trabajo.component';
import { AgradecimientoComponent } from './components/agradecimiento/agradecimiento.component';
import { HorarioComponent } from './components/horario/horario.component';
import { ContactoComponent } from './components/contacto/contacto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeatherComponent,
    FooterComponent,
    InicioSesionComponent,
    HomeComponent,
    ProductoComponent,
    QuieneSomosComponent,
    CategoriaComponent,
    TrabajoComponent,
    AgradecimientoComponent,
    HorarioComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
