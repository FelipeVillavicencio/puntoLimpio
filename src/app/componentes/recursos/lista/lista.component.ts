import { Component, OnInit, Input } from '@angular/core';
import { RecursosService } from '../../../servicios/recursos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
@Input() recurso: any = {};
        info = false;
  constructor(private recursoS: RecursosService) { }

  ngOnInit() {
    console.log(this.recurso)
  }
  editarRecurso(){
    this.recursoS.cargarRecurso(this.recurso);
    }
verInfo(){
this.info = !this.info;
}
eliminarRecursos(){
  this.recursoS.eliminarRecursos(this.recurso.id);
}
    }

