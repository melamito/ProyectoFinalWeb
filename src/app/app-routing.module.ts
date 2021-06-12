import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent} from '../app/components/inicio-sesion/inicio-sesion.component'
import { HomeComponent} from '../app/components/home/home.component'
import { ProductoComponent} from '../app/components/producto/producto.component';
import { QuieneSomosComponent} from '../app/components/quiene-somos/quiene-somos.component'
import {ContactoComponent} from '../app/components/contacto/contacto.component'

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sesion',component:InicioSesionComponent},
  {path:'producto/:id',component:ProductoComponent},
  {path:'nosotros',component:QuieneSomosComponent},
  {path:'contacto',component:ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
