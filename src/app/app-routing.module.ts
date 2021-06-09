import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioSesionComponent} from '../app/components/inicio-sesion/inicio-sesion.component'
import {HomeComponent} from '../app/components/home/home.component'
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sesion',component:InicioSesionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
