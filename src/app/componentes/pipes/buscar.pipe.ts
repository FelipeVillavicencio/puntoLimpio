import { Pipe, PipeTransform } from '@angular/core';
import { evento } from '../../Model/evento.interface';

@Pipe({
  name: 'buscar'
})
export class BuscarPipe implements PipeTransform {

  transform(eventos: any[],arg:any): any {
     const resultEventos=[];
     for (const evento of eventos) {
       if(evento.Nombre.trim().toLowerCase().indexOf(arg.toLowerCase())>-1 ){
         resultEventos.push(evento);
  
       }
     }
     return resultEventos;
  }

}
