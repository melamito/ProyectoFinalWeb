import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders,HttpParams} from '@angular/common/http'
import { Usuario } from '../interfaces/usuario'
import {Observable} from 'rxjs'
import {Subject} from 'rxjs'

const httpOptions={
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class BuscarService {

  servidor="http://127.0.0.1:3000"
  data: Subject<string> = new Subject(); 

  constructor(private servicio:HttpClient) { }

  Buscarproducto():Observable<any>{
    return this.servicio.get(`${this.servidor}/productos`)
  }

  BuscarPorId(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/productos/${id}`)
  }

  Regiones():Observable<any>{
    return this.servicio.get(`${this.servidor}/region`)
  }

  Provincias(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/provincia/${id}`)
  }

  Comunas(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/comuna/${id}`)
  }

  crearCliente(datos:Usuario):Observable<any>{
    return this.servicio.post(`${this.servidor}/crearusuario`,JSON.stringify(datos),httpOptions)
  }

  Buscarcliente():Observable<any>{
    return this.servicio.get(`${this.servidor}/buscarusuarios`)
  }
  
  BuscarClienteId(id:number):Observable<any>{
    return this.servicio.get(`${this.servidor}/buscarusuarios/${id}`)
  }

  Login(correo:string,clave:string):Observable<any>{
    return this.servicio.get(`${this.servidor}/login?correo=${JSON.stringify(correo)}&clave=${JSON.stringify(clave)}`,httpOptions)
  }

  CrearCarrito(usuario:Usuario):Observable<any>{
    return this.servicio.post(`${this.servidor}/crearcarro`,JSON.stringify(usuario),httpOptions)
  }
}
