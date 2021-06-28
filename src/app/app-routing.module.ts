import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioSesionComponent} from '../app/components/inicio-sesion/inicio-sesion.component'
import { HomeComponent} from '../app/components/home/home.component'
import { ProductoComponent} from '../app/components/producto/producto.component';
import { QuieneSomosComponent} from '../app/components/quiene-somos/quiene-somos.component'
import { ContactoComponent} from '../app/components/contacto/contacto.component'
import { CategoriaComponent } from '../app/components/categoria/categoria.component'
import { TrabajoComponent } from '../app/components/trabajo/trabajo.component'
import { AgradecimientoComponent } from './components/agradecimiento/agradecimiento.component';
import { HorarioComponent } from './components/horario/horario.component';
import { RegistroComponent} from './components/registro/registro.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'sesion',component:InicioSesionComponent},
  {path:'producto/:id',component:ProductoComponent},
  {path:'nosotros',component:QuieneSomosComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'categoria/:sexo/:cat',component:CategoriaComponent},
  {path:'trabajo',component:TrabajoComponent},
  {path:'agradecimientos',component:AgradecimientoComponent},
  {path:'horario',component:HorarioComponent},
  {path:'registro',component:RegistroComponent},
  {path: 'resultados', component:BuscadorComponent},
  { path: 'buscar/:palabra', component: BuscadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
