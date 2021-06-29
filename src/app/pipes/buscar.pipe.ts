import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(Lista:any,arg:any): any {
    const resultado:any=[];
    for(const post of Lista){
      if(post.nombre.toLowerCase().indexOf(arg.toLowerCase())>-1){
        resultado.push(post);
      };
    };
    return resultado;
  }
}
