import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {
recursos = [];
  constructor(private recursoS: RecursosService) { }

  ngOnInit() {
    this.cargarRecursos();
  }
cargarRecursos(){
  this.recursoS.obtenerRecursos().subscribe(recursoSnap =>{
    this.recursos = [];
    recursoSnap.forEach(recursoData =>{
      const id = recursoData.payload.doc.id;
      const data = recursoData.payload.doc.data() as any;
      this.recursos.push({id, ...data});
    });
  });
}

editarRecurso(recurso: any){
this.recursoS.cargarRecurso(recurso);

}
uso(recuso){
const recurso = 
  {
    id: recuso.id,
    nombre: recuso.nombre,
    tipo: recuso.tipo,
    uso : true
  }
this.recursoS.cargarRecurso(recurso);
}
}
