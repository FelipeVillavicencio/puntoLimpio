import { Component, OnInit } from '@angular/core';
import { RecursosService } from 'src/app/servicios/recursos.service';

@Component({
  selector: 'app-crudrecurso',
  templateUrl: './crudrecurso.page.html',
  styleUrls: ['./crudrecurso.page.scss'],
})
export class CrudrecursoPage implements OnInit {
  titulo= "Crear recurso";
  recurso = {
          nombre: '',
          tipo: '',
          cantidad: 0,
          uso : false
        };


  constructor(private recursoS: RecursosService) { }


  ngOnInit() {
  }

  subirRecursos(){
    this.recursoS.cargarRecurso(this.recurso);
  }
  ver(){
    console.log(this.recurso)
  }
  limpiar(){
    this.recurso.nombre = '' ;
    this.recurso.tipo = '' ;
    this.recurso.cantidad = 0 ;
  }
 fCantidad(){
   for (let index = 0; index < this.recurso.cantidad ; index++) {
     this.subirRecursos()
     
   }
   this.limpiar();
 }
}
